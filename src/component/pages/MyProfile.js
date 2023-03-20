import React from "react";
import profileimg from "../Image/profile.jpg";
import { MdAccountCircle, MdFavorite } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import TextArea from "antd/es/input/TextArea";
import { NavLink } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { Form } from "react-bootstrap";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};

function Profile() {
  return (
    <div>
      <div className="m-t-4">
        <img src={profileimg} className="w-100" />
      </div>
      <div className="container-kws">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-xxl-3 m-t-_3">
            <ProfileSidebar />
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-xxl-9 m-t-3">
            <div className="">
              <div className="f-s-2 f-w-600 m-b-2">My Profile</div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 m-y-1">
                  <div className="b-c-p-c-11 pa-2 t-a-c b-r-10">
                    <div className="f-s-1_5 f-w-600">Reelz Total Points</div>
                    <div className="num-100 m-y-1 f-s-3 f-w-800">100</div>
                    <div className="">
                      <button className="secondary-btn w-100 ">More Info</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 m-y-1">
                <div className="b-c-p-c-11 pa-2 t-a-c b-r-10">
                  <div className="f-s-1_5 f-w-600">Total Watch Hours</div>
                  <div className="num-100 m-y-1 f-s-3 f-w-800">100</div>
                  <div className="">
                    <button className="secondary-btn w-100 ">More Info</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 m-y-1">
              <div className="b-c-p-c-11 pa-2 t-a-c b-r-10">
                <div className="f-s-1_5 f-w-600">Total Videos</div>
                <div className="num-100 m-y-1 f-s-3 f-w-800">100</div>
                <div className="">
                  <button className="secondary-btn w-100 ">More Info</button>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
