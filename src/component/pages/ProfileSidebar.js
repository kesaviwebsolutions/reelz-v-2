import React from "react";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import profileimg from "../Image/profile-avtar.jpg";

function ProfileSidebar() {
  const usersignupupdateData = JSON.parse(
    localStorage.getItem("gettinguserdetailsViaPhone")
  );

  const logout = () => {
    localStorage.removeItem("gettinguserdetailsViaPhone");
    window.location.href = `/`;
  }
  

  return (
    <div>
      {" "}
      <div className="b-c-p-c-11 p-y-2 b-r-10">
      <div className="t-a-c">
      <img src={usersignupupdateData.profilePicture.profilePicture_lg_profile} className="b-r-50 m-b-2 " />
      </div>
        <div className="f-s-2 f-w-600 m-b-1 t-a-c ">{usersignupupdateData.name}</div>
        <div className="t-a-c m-b-2 p-x-1">
        {usersignupupdateData.bio}
        </div>{" "}
        <div className="account-setting  c-p f-w-600">
          <NavLink to="/profile" className="sidebar pa-1 d-b">
            <AiFillSetting className="account-setting-icon b-c-t" /> &nbsp;
            Account Setting
          </NavLink>
        </div>
        <div className="account-setting  c-p f-w-600">
          <NavLink to="/my-profile" className="sidebar pa-1 d-b">
            <MdAccountCircle className="account-setting-icon b-c-t" /> &nbsp; My
            Profile
          </NavLink>
        </div>
        <div className="account-setting  c-p f-w-600">
          <NavLink to="/purchasehistory" className="sidebar pa-1 d-b">
            <BiPurchaseTag className="account-setting-icon b-c-t" /> &nbsp;
            Purchase History
          </NavLink>
        </div>
        <div className="account-setting  c-p f-w-600">
          <NavLink to="/favourites" className="sidebar pa-1 d-b">
            <MdFavorite className="account-setting-icon b-c-t" /> &nbsp; My
            Favourites
          </NavLink>
        </div>
        <div className="account-setting  c-p f-w-600">
        <div to="" className="sidebar pa-1 d-b" onClick={logout}>
          <AiOutlineLogout className="account-setting-icon b-c-t" /> &nbsp; 
          Logout
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
