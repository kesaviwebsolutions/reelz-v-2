// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract OriginsNFTMarketplace is Pausable, ReentrancyGuard {
    address public owner;
    // uint256 public platformFee; // 250 ~ 2.5%
    // uint256 public maxRoyaltyFee = 750; // 750 ~ 7.5%

    IERC20 public R33LZ;

    struct NFTListing {
        uint256 listingId;
        address NFTContractAddress;
        address seller;
        bool NFTStandard; // true for ERC721, false for ERC1155
        uint256 TokenId;
        uint256 QuantityOnSale;
        uint256 PricePerNFT;
        uint256 listingExpireTime;
        // uint256 royaltyFee; // 750 ~ 7.5%
        // address walletForRoyalty;
        uint256 listingStatus; // 0 = inactive, 1 = active, 2 = sold
        uint256[] offers;
    }

    struct Offer {
        uint256 offerId;
        address NFTContractAddress;
        uint256 TokenId;
        uint256 quantityOfferedForPurchase;
        uint256 pricePerNFT;
        uint256 offerExpireTime;
        address offerCreator;
        bool isActive;
        uint256 lockedValue; // value locked into the contract
    }

    mapping(uint256 => NFTListing) public NFTListings;
    mapping(uint256 => Offer) public offers;
    mapping(uint256 => mapping(uint256 => uint256)) private _offersByListing;
    uint256 public listingIdCounter;
    uint256 public offerIdCounter;

    event NFTListed(
        uint256 listingId,
        address NFTContractAddress,
        bool NFTStandard,
        uint256 TokenId,
        uint256 QuantityOnSale,
        uint256 PricePerNFT,
        uint256 listingExpireTime
        // uint256 royaltyFee,
        // address walletForRoyalty
    );
    event ListingUpdated(
        uint256 listingId,
        address NFTContractAddress,
        uint256 TokenId,
        uint256 QuantityOnSale,
        uint256 PricePerNFT,
        uint256 listingExpireTime
    );
    event ListingStatusUpdated(uint256 statusCode);
    event OfferCreated(
        uint256 offerId,
        uint256 TokenId,
        uint256 quantityOfferedForPurchase,
        uint256 pricePerNFT,
        uint256 offerExpireTime
    );
    event OfferModified(
        uint256 offerId,
        uint256 quantityOfferedForPurchase,
        uint256 pricePerNFT,
        uint256 offerExpireTime
    );
    event OfferCancelled(uint256 offerId);
    event OfferAccepted(uint256 offerId, address buyer);
    event NFT721Bought(uint256 listingId, uint256 tokenId, address buyer);
    event NFT1155Bought(
        uint256 listingId,
        uint256 tokenId,
        uint256 quantity,
        address buyer
    );
    event TokenRecovery(address indexed tokenAddress, uint256 indexed amount);
    event NFTRecovery(
        address indexed NFTContractAddress,
        uint256 indexed tokenId
    );
    event Pause(string reason);
    event Unpause(string reason);

    constructor(
        // uint256 _platformFee, 
        IERC20 _R33LZ
        ) {
        owner = msg.sender;
        // platformFee = _platformFee;
        R33LZ = _R33LZ;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function getListingsByAddress(address seller)
        public
        view
        returns (uint256[] memory)
    {
        uint256 count = 0;
        for (uint256 i = 1; i <= listingIdCounter; i++) {
            if (NFTListings[i].seller == seller) {
                count++;
            }
        }
        uint256[] memory result = new uint256[](count);
        count = 0;
        for (uint256 i = 1; i <= listingIdCounter; i++) {
            if (NFTListings[i].seller == seller) {
                result[count] = i;
                count++;
            }
        }
        return result;
    }

    function getListingsByStatus(uint256 listingStatus)
        public
        view
        returns (uint256[] memory)
    {
        uint256 count = 0;
        for (uint256 i = 1; i <= listingIdCounter; i++) {
            if (NFTListings[i].listingStatus == listingStatus) {
                count++;
            }
        }
        uint256[] memory result = new uint256[](count);
        count = 0;
        for (uint256 i = 1; i <= listingIdCounter; i++) {
            if (NFTListings[i].listingStatus == listingStatus) {
                result[count] = i;
                count++;
            }
        }
        return result;
    }

    function getListing(address NFTContractAddress, uint256 tokenId)
        public
        view
        returns (NFTListing memory)
    {
        for (uint256 i = 1; i <= listingIdCounter; i++) {
            NFTListing storage listing = NFTListings[i];
            if (
                listing.NFTContractAddress == NFTContractAddress &&
                listing.TokenId == tokenId
            ) {
                return listing;
            }
        }
        revert("Listing not found");
    }

    function listNFT(
        address _NFTContractAddress,
        bool _NFTStandard,
        uint256 _TokenId,
        uint256 _QuantityOnSale,
        uint256 _PricePerNFT,
        uint256 _listingExpireTime
        // uint256 _royaltyFee,
        // address _walletForRoyalty
    ) external nonReentrant whenNotPaused {
        // require(_royaltyFee <= maxRoyaltyFee, "Royalty fee is too high");
        require(_PricePerNFT > 0, "Price must be greater than zero");
        require(_QuantityOnSale > 0, "Quantity must be greater than zero");
        // require(
        //     _walletForRoyalty != address(0),
        //     "Invalid royalty wallet address"
        // );

        if (_NFTStandard) {
            IERC721 NFTContract = IERC721(_NFTContractAddress);
            require(
                NFTContract.ownerOf(_TokenId) == msg.sender,
                "You must own this NFT to list it"
            );
            require(
                NFTContract.getApproved(_TokenId) == address(this),
                "You must approve the contract to manage this NFT"
            );
        } else {
            IERC1155 NFTContract = IERC1155(_NFTContractAddress);
            require(
                NFTContract.balanceOf(msg.sender, _TokenId) >= _QuantityOnSale,
                "You must own enough of this NFT to list it"
            );
            require(
                NFTContract.isApprovedForAll(msg.sender, address(this)),
                "You must approve the contract to manage this NFT"
            );
        }
        require(
            _listingExpireTime > block.timestamp,
            "Invalid listing duration"
        );

        uint256 listingId = ++listingIdCounter;
        NFTListings[listingId] = NFTListing({
            listingId: listingId,
            NFTContractAddress: _NFTContractAddress,
            seller: msg.sender,
            NFTStandard: _NFTStandard,
            TokenId: _TokenId,
            QuantityOnSale: _QuantityOnSale,
            PricePerNFT: _PricePerNFT,
            listingExpireTime: _listingExpireTime,
            // royaltyFee: _royaltyFee,
            // walletForRoyalty: _walletForRoyalty,
            listingStatus: 1,
            offers: new uint256[](0)
        });

        emit NFTListed(
            listingId,
            _NFTContractAddress,
            _NFTStandard,
            _TokenId,
            _QuantityOnSale,
            _PricePerNFT,
            _listingExpireTime
            // _royaltyFee,
            // _walletForRoyalty
        );
    }

    function updateListing(
        uint256 _listingId,
        uint256 _quantityOnSale,
        uint256 _pricePerNFT,
        uint256 _listingExpireTime
        // uint256 _royaltyFee,
        // address _walletForRoyalty
    ) external whenNotPaused {
        NFTListing storage listing = NFTListings[_listingId];
        require(listing.listingStatus == 1, "Listing is not active");
        require(
            listing.seller == msg.sender,
            "Only the seller can update the listing"
        );

        require(_quantityOnSale > 0, "Quantity must be greater than 0");
        require(_pricePerNFT > 0, "Price must be greater than 0");
        // require(
        //     _royaltyFee <= maxRoyaltyFee,
        //     "Royalty fee exceeds maximum allowed"
        // );
        // require(
        //     _walletForRoyalty != address(0),
        //     "Invalid royalty wallet address"
        // );

        listing.QuantityOnSale = _quantityOnSale;
        listing.PricePerNFT = _pricePerNFT;
        listing.listingExpireTime = _listingExpireTime;
        // listing.royaltyFee = _royaltyFee;
        // listing.walletForRoyalty = _walletForRoyalty;

        emit ListingUpdated(
            _listingId,
            listing.NFTContractAddress,
            listing.TokenId,
            listing.QuantityOnSale,
            listing.PricePerNFT,
            listing.listingExpireTime
        );
    }

    function buyERC721NFT(uint256 listingId, uint256 quantity)
        public
        nonReentrant
        whenNotPaused
    {
        NFTListing storage listing = NFTListings[listingId];

        require(listing.listingStatus == 1, "Listing is not active");
        require(listing.NFTStandard, "Can only buy ERC721 NFT using this.");
        require(
            listing.listingExpireTime >= block.timestamp,
            "Listing has expired"
        );
        require(
            listing.QuantityOnSale >= quantity,
            "Not enough tokens available for sale"
        );

        uint256 totalPrice = listing.PricePerNFT * quantity;
        // uint256 platformFeeAmount = (totalPrice * platformFee) / 10000;
        // uint256 sellerRoyaltyFeeAmount = (totalPrice * listing.royaltyFee) /
        //     10000;
        // uint256 sellerAmount = totalPrice -
        //     platformFee -
        //     sellerRoyaltyFeeAmount;

        require(
            R33LZ.allowance(msg.sender, address(this)) >= totalPrice,
            "Allow R33LZ to transfer the total price"
        );
        require(
            R33LZ.transferFrom(msg.sender, address(0xdead), totalPrice),
            "Failed to transfer R33LZ"
        );

        // if (platformFeeAmount > 0) {
        //     require(
        //         R33LZ.transfer(owner, platformFeeAmount),
        //         "Failed to transfer platform fee to owner"
        //     );
        // }

        // if (sellerRoyaltyFeeAmount > 0) {
        //     require(
        //         R33LZ.transfer(listing.walletForRoyalty, sellerRoyaltyFeeAmount),
        //         "Failed to transfer royalty fee to seller"
        //     );
        // }

        // if (sellerAmount > 0) {
        //     require(
        //         R33LZ.transfer(listing.seller, sellerAmount),
        //         "Failed to transfer sale amount to seller"
        //     );
        // }
        IERC721 NFTContract = IERC721(listing.NFTContractAddress);
        NFTContract.safeTransferFrom(
            listing.seller,
            msg.sender,
            listing.TokenId
        );

        listing.listingStatus = 2; // update listing status to sold
        listing.QuantityOnSale -= quantity;

        emit NFT721Bought(listingId, listing.TokenId, msg.sender);
    }

    function buyERC1155NFT(uint256 listingId, uint256 quantity)
        public
        nonReentrant
        whenNotPaused
    {
        NFTListing storage listing = NFTListings[listingId];

        require(listing.listingStatus == 1, "Listing is not active");
        require(!listing.NFTStandard, "Can only buy ERC1155 NFT using this.");
        require(
            listing.listingExpireTime >= block.timestamp,
            "Listing has expired"
        );
        require(
            listing.QuantityOnSale >= quantity,
            "Not enough tokens available for sale"
        );

        uint256 totalPrice = listing.PricePerNFT * quantity;
        // uint256 platformFeeAmount = (totalPrice * platformFee) / 10000;
        // uint256 sellerRoyaltyFeeAmount = (totalPrice * listing.royaltyFee) /
        //     10000;
        // uint256 sellerAmount = totalPrice -
        //     platformFee -
        //     sellerRoyaltyFeeAmount;

        require(
            R33LZ.allowance(msg.sender, address(this)) >= totalPrice,
            "Allow R33LZ to transfer the total price"
        );
        require(
            R33LZ.transferFrom(msg.sender, address(0xdead), totalPrice),
            "Failed to transfer R33LZ"
        );

        // if (platformFeeAmount > 0) {
        //     require(
        //         R33LZ.transfer(owner, platformFeeAmount),
        //         "Failed to transfer platform fee to owner"
        //     );
        // }

        // if (sellerRoyaltyFeeAmount > 0) {
        //     require(
        //         R33LZ.transfer(listing.walletForRoyalty, sellerRoyaltyFeeAmount),
        //         "Failed to transfer royalty fee to seller"
        //     );
        // }

        // if (sellerAmount > 0) {
        //     require(
        //         R33LZ.transfer(listing.seller, sellerAmount),
        //         "Failed to transfer sale amount to seller"
        //     );
        // }

        IERC1155 NFTContract = IERC1155(listing.NFTContractAddress);
        NFTContract.safeTransferFrom(
            listing.seller,
            msg.sender,
            listing.TokenId,
            quantity,
            ""
        );
        if (listing.QuantityOnSale - quantity == 0) {
            listing.listingStatus = 2; // update listing status to sold
        }

        listing.QuantityOnSale -= quantity;

        emit NFT1155Bought(listingId, listing.TokenId, quantity, msg.sender);
    }

    /* Offers functions */

    function getOffersByListing(uint256 listingId)
        external
        view
        returns (Offer[] memory)
    {
        require(
            NFTListings[listingId].listingStatus == 1,
            "Listing not active"
        );
        uint256[] memory offerIds = NFTListings[listingId].offers;
        Offer[] memory result = new Offer[](offerIds.length);
        for (uint256 i = 0; i < offerIds.length; i++) {
            result[i] = offers[offerIds[i]];
        }
        return result;
    }

    function getOffersByWallet(address _offerer)
        external
        view
        returns (Offer[] memory)
    {
        uint256 offersCount = offerIdCounter;
        Offer[] memory result = new Offer[](offersCount);

        uint256 resultIndex = 0;
        for (uint256 i = 1; i <= offersCount; i++) {
            Offer storage offer = offers[i];
            if (offer.offerCreator == _offerer) {
                result[resultIndex] = offer;
                resultIndex++;
            }
        }

        return result;
    }

    function makeOffer(
        uint256 _listingId,
        uint256 _quantity,
        uint256 _pricePerNFT,
        uint256 _offerExpireTime
    ) external nonReentrant whenNotPaused {
        require(_quantity > 0, "Invalid quantity");
        require(_pricePerNFT > 0, "Invalid price");
        require(
            _offerExpireTime > block.timestamp,
            "Can't set to previous dates"
        );

        NFTListing storage listing = NFTListings[_listingId];
        require(listing.listingId == _listingId, "Invalid listing ID");
        require(listing.listingStatus == 1, "Listing not active");
        require(
            msg.sender != listing.seller,
            "Listing owner can't make an offer"
        );

        if (listing.NFTStandard) {
            require(
                listing.QuantityOnSale >= _quantity,
                "Insufficient quantity"
            );
            require(
                IERC721(listing.NFTContractAddress).ownerOf(listing.TokenId) ==
                    listing.seller,
                "Seller does not own NFT"
            );
        } else {
            require(
                listing.QuantityOnSale >= _quantity,
                "Insufficient quantity"
            );
            require(
                IERC1155(listing.NFTContractAddress).balanceOf(
                    listing.seller,
                    listing.TokenId
                ) >= _quantity,
                "Seller does not own enough NFTs"
            );
        }

        uint256 offerAmount = _quantity * _pricePerNFT;
        // if (offerAmount > 0) {
        //     require(
        //         R33LZ.transferFrom(msg.sender, address(this), offerAmount),
        //         "Transfer of offer amount failed!"
        //     );
        // }

        uint256 offerId = offerIdCounter++;
        offers[offerId] = Offer({
            offerId: offerId,
            NFTContractAddress: listing.NFTContractAddress,
            TokenId: listing.TokenId,
            quantityOfferedForPurchase: _quantity,
            pricePerNFT: _pricePerNFT,
            offerExpireTime: _offerExpireTime,
            offerCreator: msg.sender,
            isActive: true,
            lockedValue: offerAmount
        });

        listing.offers.push(offerId);
        _offersByListing[_listingId][offerId] = listing.offers.length;

        emit OfferCreated(
            offerId,
            listing.TokenId,
            _quantity,
            _pricePerNFT,
            _offerExpireTime
        );
    }

    function cancelOffer(uint256 _offerId) external nonReentrant {
        require(
            offers[_offerId].offerCreator == msg.sender,
            "Only offer creator can cancel this offer"
        );
        require(offers[_offerId].isActive, "Offer already inactive");

        // Transfer locked value back to offer creator
        uint256 lockedValue = offers[_offerId].lockedValue;
        if (lockedValue > 0) {
            require(
                R33LZ.transfer(msg.sender, lockedValue),
                "Transfer of locker value to offer creator failed!"
            );
        }

        // Mark offer as inactive
        offers[_offerId].isActive = false;

        emit OfferCancelled(_offerId);
    }

    function modifyOffer(
        uint256 _offerId,
        uint256 _quantityOfferedForPurchase,
        uint256 _pricePerNFT,
        uint256 _offerExpireTime
    ) external nonReentrant {
        require(
            offers[_offerId].offerCreator == msg.sender,
            "Only offer creator can modify this offer"
        );
        require(offers[_offerId].isActive, "Offer already inactive");
        require(
            _quantityOfferedForPurchase > 0,
            "Quantity must be greater than zero"
        );

        uint256 newLockedValue = _quantityOfferedForPurchase * _pricePerNFT;

        // if (newLockedValue > offers[_offerId].lockedValue) {
        //     require(
        //         R33LZ.balanceOf(msg.sender) >=
        //             newLockedValue - offers[_offerId].lockedValue,
        //         "Not enough balance in your wallet"
        //     );
        //     require(
        //         R33LZ.transferFrom(
        //             msg.sender,
        //             address(this),
        //             newLockedValue - offers[_offerId].lockedValue
        //         ),
        //         "R33LZ transfer failed"
        //     );
        // } else {
        //     uint256 refundAmount = offers[_offerId].lockedValue -
        //         newLockedValue;

        //     R33LZ.transfer(offers[_offerId].offerCreator, refundAmount);
        // }

        // Update offer details
        offers[_offerId]
            .quantityOfferedForPurchase = _quantityOfferedForPurchase;
        offers[_offerId].pricePerNFT = _pricePerNFT;
        offers[_offerId].offerExpireTime = _offerExpireTime;
        offers[_offerId].lockedValue = newLockedValue;

        emit OfferModified(
            _offerId,
            _quantityOfferedForPurchase,
            _pricePerNFT,
            _offerExpireTime
        );
    }

    function acceptOffer(uint256 offerId) external nonReentrant whenNotPaused {
        Offer storage offer = offers[offerId];

        require(offer.isActive, "Offer is inactive");
        require(
            NFTListings[_offersByListing[offer.TokenId][offerId]].seller ==
                msg.sender,
            "Only the listing owner can accept offers"
        );

        // Calculate and transfer platform fee
        // uint256 platformFees = (offer.lockedValue * platformFee) / 10000;
        // require(
        //     R33LZ.transfer(owner, platformFees),
        //     "Failed to transfer platform fees"
        // );

        // // Calculate and transfer royalty fee to the wallet specified by the seller
        // uint256 royaltyFees = (offer.lockedValue *
        //     NFTListings[_offersByListing[offer.TokenId][offerId]].royaltyFee) /
        //     10000;
        // require(
        //     R33LZ.transfer(
        //         NFTListings[_offersByListing[offer.TokenId][offerId]]
        //             .walletForRoyalty,
        //         royaltyFees
        //     ),
        //     "Failed to transfer royalty fees to the wallet"
        // );

        // Transfer the R33LZ tokens to dead address
        uint256 toBurn = offer.lockedValue;
        require(toBurn <= R33LZ.balanceOf(address(this)), "Contract doesn't have enough balance!");
        require(
            R33LZ.transfer(
                address(0xdead),
                toBurn
            ),
            "Failed to transfer R33LZ to the seller"
        );

        // Transfer the NFT to the buyer
        if (NFTListings[_offersByListing[offer.TokenId][offerId]].NFTStandard) {
            IERC721(
                NFTListings[_offersByListing[offer.TokenId][offerId]]
                    .NFTContractAddress
            ).safeTransferFrom(
                    NFTListings[_offersByListing[offer.TokenId][offerId]]
                        .seller,
                    msg.sender,
                    NFTListings[_offersByListing[offer.TokenId][offerId]]
                        .TokenId
                );
            // Mark the listing as sold and the offer as inactive
            NFTListings[_offersByListing[offer.TokenId][offerId]]
                .listingStatus = 2;
        } else {
            IERC1155(
                NFTListings[_offersByListing[offer.TokenId][offerId]]
                    .NFTContractAddress
            ).safeTransferFrom(
                    NFTListings[_offersByListing[offer.TokenId][offerId]]
                        .seller,
                    msg.sender,
                    NFTListings[_offersByListing[offer.TokenId][offerId]]
                        .TokenId,
                    offer.quantityOfferedForPurchase,
                    ""
                );
        }

        // Mark the listing as sold and the offer as inactive
        // NFTListings[_offersByListing[offer.TokenId][offerId]].listingStatus = 2;
        offer.isActive = false;

        // Emit events
        emit OfferAccepted(offerId, msg.sender);
    }

    /**
        Admin functions
        -------------------------------------------------------------------
    **/

    /** 
        @notice recover any ERC20 token sent to the contract
        @param _token address of the token to recover
        @param _amount amount of the token to recover
    */
    function recoverToken(address _token, uint256 _amount)
        external
        whenPaused
        onlyOwner
    {
        IERC20(_token).transfer(address(msg.sender), _amount);
        emit TokenRecovery(_token, _amount);
    }

    /** 
        @notice recover any ERC721 token sent to the contract
        @param _NFTContract of the collection to recover
        @param _tokenId uint256 of the tokenId to recover
    */
    function recoverNFT(address _NFTContract, uint256 _tokenId)
        external
        whenPaused
        onlyOwner
    {
        IERC721 nft = IERC721(_NFTContract);
        nft.safeTransferFrom(address(this), address(msg.sender), _tokenId);
        emit NFTRecovery(_NFTContract, _tokenId);
    }

    /** 
        @notice recover any ERC721 token sent to the contract
        @param _NFTContract of the collection to recover
        @param _tokenId uint256 of the tokenId to recover
    */
    function recover1155NFT(
        address _NFTContract,
        uint256 _tokenId,
        uint256 _quantity
    ) external whenPaused onlyOwner {
        IERC1155 nft = IERC1155(_NFTContract);
        nft.safeTransferFrom(
            address(this),
            address(msg.sender),
            _tokenId,
            _quantity,
            ""
        );
        emit NFTRecovery(_NFTContract, _tokenId);
    }

    /** 
        @notice pause the marketplace
        @param _reason string of the reason for pausing the marketplace
    */
    function pauseMarketplace(string calldata _reason)
        external
        whenNotPaused
        onlyOwner
    {
        _pause();
        emit Pause(_reason);
    }

    /** 
        @notice unpause the marketplace
        @param _reason string of the reason for unpausing the marketplace
    */
    function unpauseMarketplace(string calldata _reason)
        external
        whenPaused
        onlyOwner
    {
        _unpause();
        emit Unpause(_reason);
    }

    /**
        Admin functions
        -------------------------------------------------------------------
    **/
}
