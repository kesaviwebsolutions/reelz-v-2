import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sliderhome from "./Sliderhome";
import NFT from "./NFT";
import ProductSlider from "./ProductSlider";
import CategoriesSlider from "./CategoriesSlider";
import { Link } from "react-router-dom";





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


function Home() {
  const usersignupupdateData = JSON.parse(
    localStorage.getItem("gettinguserdetailsViaPhone")
  );



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
    <>
      <div className="container-kws">
        <div className="section">
          <Sliderhome />
        </div>
        <div className="section">
          <div className="f-s-2 f-w-600 m-b-2">All Categories</div>
          <div className="">
            <CategoriesSlider />
          </div>
        </div>
        <div className="section">
          <div className=" m-b-2 d-f j-c-s-b a-i-c">
            <div className="f-s-2 f-w-600">Top Products</div>
            <Link to="/product">
              <div className="">
                <button className="primary-btn">View More</button>
              </div>
            </Link>
          </div>
          <div className="m-b-2">
            <ProductSlider />
          </div>
          <div className="">
            <ProductSlider />
          </div>
        </div>
        <div className="section">
          <div className=" m-b-2 d-f j-c-s-b a-i-c">
            <div className="f-s-2 f-w-600">Top NFT's</div>
            <Link to="/nft">
              <div className="">
                <button className="primary-btn">View More</button>
              </div>
            </Link>
          </div>
          <div className="">
          <div className="">
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
                                  <img src={res.image} alt="images" className="h-28" />
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
                                      <button className="secondary-btn-purchase pa-0_5">
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
    
      </div>
 
    </>
  );
}

export default Home;
