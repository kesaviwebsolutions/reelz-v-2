import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import detailimage from "../Image/detailimage.jpg";
import ItemDetailTab from "./ItemDetailTab";
import detailowner from "../Image/detailowner.png";
import ItemDetailTable from "./ItemDetailTable";
import Collector from "./Collector";
import Modal from "react-bootstrap/Modal";
import { useStoreState } from "easy-peasy";
import {
  get_Marketplace_contract,
  get_NFT_contract_1155,
  get_NFT_contract_721,
} from "../../Contracts/Web3";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const notify = (msg) => toast(msg);
const warning = (msg) => toast.error(msg);

function ItemDetail() {
  const { index } = useParams();
  const wallet_address = useStoreState((state) => state.wallet_address);
  const [account, setAccount] = useState();
  const [contract_721, setContract_721] = useState();
  const [contract_1155, setContract_1155] = useState();
  const [marketplaceContract, setMartketplaceContract] = useState();
  const [properties, setProperties] = useState([]);
  const [NFT_name, setNFT_Name] = useState();
  const [iamge_uri, setImage_Uri] = useState();
  const [nft_discription, setNFT_Discription] = useState("");
  const [price, setPrice] = useState();
  const [owner, setOwner] = useState("");
  const [isListed, setIsListed] = useState(false);
  const [listingID, setListingID] = useState();
  const [quantity, setQuantity] = useState();
  const [standard, setStandart] = useState();
  const [offerExpireTime, setOfferExpireTime] = useState();
  const [quantityTopuchase, setQuantityToPuchase] = useState();
  const [priceOfOffer, setPriceOfOffer] = useState();
  const [offers, setOffers] = useState([]);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const addslice = (add) => {
    const first = add.slice(0, 7);
    const seoncds = add.slice(36);
    return first + "..." + seoncds;
  };

  useEffect(() => {
    const init = async () => {
      const maketplace = await get_Marketplace_contract();
      setMartketplaceContract(maketplace);

      let nft_listings = await maketplace.methods
        .NFTListings(Number(index) + 1)
        .call();
      setListingID(nft_listings.listingId);
      setQuantity(nft_listings.QuantityOnSale);
      setStandart(nft_listings.NFTStandard);
      console.log("NFT listing details ", nft_listings);
      if (nft_listings.NFTStandard) {
        const nft_721 = await get_NFT_contract_721(
          nft_listings.NFTContractAddress
        );
        let name = await nft_721.methods.name().call();
        let uri = await nft_721.methods.getBaseURI().call();
        let api_data = await axios.get(uri).then((res) => {
          return res.data;
        });

        setImage_Uri(api_data.image);
        setNFT_Name(name);
        setProperties(api_data.attributes);
        setPrice(nft_listings.PricePerNFT / 10 ** 18);
        setOwner(nft_listings.seller);
        setIsListed(nft_listings.listingStatus == 1 ? true : false);
        setNFT_Discription(api_data.description);
      } else {
        const nft_1155 = await get_NFT_contract_1155(
          nft_listings.NFTContractAddress
        );
        let name = await nft_1155.methods.name().call();
        let uri = await nft_1155.methods.getBaseURI().call();
        let api_data = await axios.get(uri).then((res) => {
          return res.data;
        });

        setImage_Uri(api_data.image);
        setNFT_Name(name);
        setProperties(api_data.attributes);
        setPrice(nft_listings.PricePerNFT / 10 ** 18);
        setOwner(nft_listings.seller);
        setIsListed(nft_listings.listingStatus == 1 ? true : false);
        setNFT_Discription(api_data.description);
      }

      const offercount = await maketplace.methods
        .getOffersByListing(nft_listings.listingId)
        .call();
      setOffers(offercount);

      console.log(offercount);
    };
    init();
  }, [wallet_address]);

  const buy_NFT_721 = async () => {
    try {
      const data = await marketplaceContract.methods
        .buyERC721NFT(listingID, quantity)
        .send({ from: wallet_address });
      if (data.status) {
        notify("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buy_NFT_1155 = async () => {
    try {
      const data = await marketplaceContract.methods
        .buyERC721NFT(listingID, quantity)
        .send({ from: wallet_address });
      if (data.status) {
        notify("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const make_Offer = async () => {
    try {
      const data = await marketplaceContract.methods
        .makeOffer(listingID, quantity, priceOfOffer, offerExpireTime)
        .send({ from: wallet_address });
      if (data.status) {
        notify("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const accept_Offer = async (id) => {
    try {
      const data = await marketplaceContract.methods
        .acceptOffer(id)
        .send({ from: wallet_address });
      if (data.status) {
        notify("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(owner);
  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <div className="f-s-2 f-w-600">Item Detail</div>

          <div className="m-t-2">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 p-y-1">
                <div className="details-img">
                  <div className="img-details">
                    <img
                      src={iamge_uri}
                      alt=""
                      className="image-details b-r-10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 p-y-1">
                <div className="d-f j-c-s-b a-i-c">
                  <div className="">
                    <img src={detailowner} className="b-r-10" /> &nbsp; Trending
                    Arts
                  </div>
                  <div className="d-f a-i-c">
                    <div className="b-r-20 b-2 pa-0_5 c-p">
                      <AiOutlineHeart /> &nbsp; 68
                    </div>{" "}
                    &nbsp; &nbsp;
                    <div className="b-r-50 b-2 pa-0_5 c-p">
                      <BsThreeDots />
                    </div>
                  </div>
                </div>
                <div className="f-s-2 f-w-600 m-t-1">{NFT_name}</div>
                <div className="m-t-1 ">{nft_discription}</div>
                <div className="m-t-1">
                  <ItemDetailTab properties={properties} owner={owner} />
                </div>
                <div className="m-t-1">
                  <div className="b-c-p-c-11 p-x-1 p-y-2 b-r-10">
                    <div className="d-f j-c-s-b a-i-c m-b-1">
                      <div className="">Current Bid</div>
                      <div className="">{price} ETH</div>
                    </div>
                    <div className="">
                      {owner == wallet_address ? (
                        " "
                      ) : (
                        <button
                          className="secondary-btn m-b-1 "
                          onClick={() => {
                            if (!isListed) {
                              return;
                            }
                            if (standard) {
                              buy_NFT_721();
                            } else {
                              buy_NFT_1155();
                            }
                          }}
                        >
                          BUY
                        </button>
                      )}
                      {owner == wallet_address ? (
                        " "
                      ) : (
                        <button
                          className="secondary-btn "
                          onClick={handleShow2}
                        >
                          MAKE OFFER
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">Offers</div>
          <div className="">
            <ItemDetailTable
              offers={offers}
              accept_Offer={accept_Offer}
              owner={owner}
              wallet_address={wallet_address}
            />
          </div>
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">Explore More</div>
          <div className="">
            <Collector />
          </div>
          <Toaster />
        </div>
      </div>
      <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header>
            <Modal.Title className="t-a-c m-a c-i">
              <div className="f-s-2 f-w-600">Place A Bid</div>
            </Modal.Title>
            <RxCross2 className="c-p" onClick={handleClose2} />
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="t-a-c">
              <div className="m-b-1">You must bid a least 4.89 ETH</div>
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="00.00 ETH"
                />
              </div>
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Quantity"
                />
              </div>
              <div className="m-b-1">
                <input
                  type="datetime-local"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Quantity"
                />
              </div>
              <div className="d-f j-c-s-b a-i-c m-b-1">
                <div className="">You must bid at least:</div>
                <div className="">4.89 ETH</div>
              </div>
              <div className="d-f j-c-s-b a-i-c m-b-1">
                <div className="">Service free:</div>
                <div className="">0,89 ETH</div>
              </div>
              <div className="d-f j-c-s-b a-i-c m-b-1">
                <div className="">Total bid amount:</div>
                <div className="">4 ETH</div>
              </div>
              <div className="primary-btn m-b-1">Place a bid</div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default ItemDetail;
