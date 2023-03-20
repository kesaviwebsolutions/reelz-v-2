import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ProfileSidebar() {
  return (
    <div>
      {" "}
      <div className="b-c-p-c-11 p-y-2 b-r-10">
        <div className="f-s-2 f-w-600 m-b-1 t-a-c ">Reelz User</div>
        <div className="t-a-c m-b-2">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.
        </div>{" "}
        <div className="account-setting  c-p f-w-600">
          <NavLink to="/profile" className="sidebar pa-1 d-b">
            <AiFillSetting className="account-setting-icon b-c-t" /> &nbsp;
            Account Setting
          </NavLink>
        </div>
        <NavLink className="">
          <div className="pa-1 c-p">
            <MdAccountCircle /> &nbsp; My Profile
          </div>
        </NavLink>
        <div className="pa-1 c-p">
          <BiPurchaseTag /> &nbsp; Purchase History
        </div>
        <div className="pa-1 c-p">
          <MdFavorite /> &nbsp; My Favourites
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
