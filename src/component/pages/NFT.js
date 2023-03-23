import React from "react";
import Collector from "./Collector";

function NFT() {
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
        <Collector />
          <div className="p-y-7 t-a-c">NO DATA TO SHOW....</div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
