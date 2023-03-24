import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import detailimage from "../Image/detailimage.jpg";
import ItemDetailTab from "./ItemDetailTab";
import detailowner from "../Image/detailowner.png";
import ItemDetailTable from "./ItemDetailTable";
import Collector from "./Collector";

function ItemDetail() {
  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <div className="f-s-2 f-w-600">Item Detail</div>

          <div className="m-t-2">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 p-y-1">
                <img src={detailimage} alt="" className="w-100 b-r-10" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 p-y-1">
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
                <div className="f-s-2 f-w-600 m-t-1">Nikhil</div>
                <div className="m-t-1">
                  I am rich, I am rich, I am rich, I am rich, I am rich, I am
                  rich, I am rich, I am rich, I am rich, I am rich, I am rich, I
                  am rich,
                </div>
                <div className="m-t-1">
                  <ItemDetailTab />
                </div>
                <div className="m-t-1">
                  <div className="b-c-p-c-11 p-x-1 p-y-2 b-r-10">
                    <div className="d-f j-c-s-b a-i-c m-b-1">
                      <div className="">Current Bid</div>
                      <div className="">100 ETH ($100 USD)</div>
                    </div>
                    <div className="">
                    <button className="secondary-btn m-b-1 ">BUY</button>
                    <button className="secondary-btn ">MAKE OFFER</button>
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
        <ItemDetailTable />
        </div>
        </div>
        <div className="section">
        <div className="f-s-2 f-w-600 m-b-2">Explore More</div>
        <div className="">
        <Collector />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
