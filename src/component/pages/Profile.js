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
              <div className="f-s-2 f-w-600 m-b-3">Edit Profile</div>
              <div className="f-s-1 f-w-600 m-b-2">Contact Details</div>
              <div className="m-b-1">Full Name</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="m-b-1">Email Address</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="m-b-1">Gender</div>
              <div className="m-b-2">
                <Form.Select
                  aria-label="Default select example"
                  className="b-c-p-c-11 b-n"
                >
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Other</option>
                </Form.Select>
              </div>
              <div className="m-b-1">Date of Birth</div>
              <div className="m-b-2">
                <DatePicker
                  showTime
                  onChange={onChange}
                  onOk={onOk}
                  className="b-c-p-c-11 w-100 b-n pa-0_5"
                />
              </div>
              <div className="m-b-1">Address</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your Address"
                />
              </div>
              <div className="m-b-1">Zip Code</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your Zip Code"
                />
              </div>
              <div className="m-b-1">State</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your State"
                />
              </div>
              <div className="m-b-1">Country</div>
              <div className="m-b-2">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Your Country"
                />
              </div>
              <div className="m-b-1">Bio</div>
              <div className="m-b-2">
                <TextArea
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10 c-w"
                  placeholder="Message"
                />
              </div>
              <div className="">
                <button className="primary-btn w-100 ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
