import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Collector from "./Collector";
import nftdemo from "../Image/Reelz-62.gif";
import { AiFillHeart } from "react-icons/ai";
import eth from "../Svg/eth.svg";
import avtar from "../Image/avtar.png";
import {
  get_Marketplace_contract,
  get_NFT_contract_1155,
  get_NFT_contract_721,
} from "../../Contracts/Web3";
import axios from "axios";
import { useStoreState } from "easy-peasy";
import { FallingLines } from "react-loader-spinner";

function NFT() {
  const wallet_address = useStoreState((state) => state.wallet_address);

  const [contract_721, setContract_721] = useState();
  const [contract_1155, setContract_1155] = useState();
  const [marketplaceContract, setMartketplaceContract] = useState();
  const [listings, setListings] = useState();

  useEffect(() => {
    const init = async () => {
      const maketplace = await get_Marketplace_contract();
      setMartketplaceContract(maketplace);

      let listingCounts = await maketplace.methods.listingIdCounter().call();
      listingCounts = Number(listingCounts);

      let listing = [];
      let nft_listings = {};
      for (let i = 1; i <= listingCounts; i++) {
        nft_listings = await maketplace.methods.NFTListings(i).call();
        console.log(nft_listings);

        if (nft_listings.NFTStandard) {
          const nft_721 = await get_NFT_contract_721(
            nft_listings.NFTContractAddress
          );
          let name = await nft_721.methods.name().call();
          let uri = await nft_721.methods.getBaseURI().call();
          console.log(uri);
          let api_data = await axios.get(uri).then((res) => {
            return res.data;
          });
          nft_listings.name = name;
          nft_listings.image = api_data.image;
          nft_listings.uri = uri;
        } else {
          const nft_1155 = await get_NFT_contract_1155(
            nft_listings.NFTContractAddress
          );
          let name = await nft_1155.methods.name().call();
          let uri = await nft_1155.methods.getBaseURI().call();
          let api_data = await axios.get(uri).then((res) => {
            return res.data;
          });
          nft_listings.image = api_data.image;
          nft_listings.name = name;
          nft_listings.uri = uri;
        }

        listing.push(nft_listings);
      }
      setListings(listing);
    };
    init();
  }, [wallet_address]);

  console.log(listings);

  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <div className="d-f j-c-s-b">
            <div className="f-s-2 f-w-600">Nfts</div>
            <div className=""></div>
          </div>
        </div>
        <div className="section">
          <div className="row">
            {listings ? (
              listings.length > 0 ? (
                listings.map((res) => {
                  return (
                    <>
                      {Number(res.listingStatus) == 1 ? (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1">
                          <div className="slider-item">
                            <div className="sc-product style1">
                              <div className="top">
                                <Link to="/product-details" className="tag">
                                  {res.name}
                                </Link>
                                <div className="wish-list">
                                  <Link to="#" className="heart-icon">
                                    <AiFillHeart />
                                  </Link>
                                </div>
                              </div>
                              <div className="m-b-1 d-f">
                                <div className="">
                                  <img src={avtar} className="w-2_5" /> &nbsp;
                                  &nbsp;
                                </div>
                                <div className="f-s-0_8">
                                  Creator
                                  <br />
                                  <span className="f-w-600">R33LZ</span>
                                </div>
                              </div>
                              <div className="features">
                                <div className="product-media">
                                  <img src={res.image} alt="images" />
                                </div>
                              </div>
                              <div className="bottom">
                                <div className="d-f j-c-s-b">
                                  <div className="d-f a-i-c">
                                    <div className="">
                                      <img src={eth} className="w-2 " /> &nbsp;
                                      &nbsp;
                                    </div>
                                    <div className="">
                                      R33LZ
                                      <br />
                                      <span className="f-w-600">
                                        {res.PricePerNFT / 10 ** 18} ETH
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-button">
                                    <Link
                                      to={`/item-detail/${listings.indexOf(
                                        res
                                      )}`}
                                      className="tf-button"
                                    >
                                      {" "}
                                      <button className="secondary-btn">
                                        Purchase
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })
              ) : (
                <div>NO DATA TO SHOW....</div>
              )
            ) : (
              <FallingLines
                color="#FDF21A"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
