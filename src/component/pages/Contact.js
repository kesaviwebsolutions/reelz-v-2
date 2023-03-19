import TextArea from "antd/es/input/TextArea";
import React from "react";
import contactimage from "../Image/contact-image.png";

function Contact() {
    return (
        <div>
            <div className="container-kws">
                <div className="section">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={contactimage} className="w-75 m-a h-100" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="f-s-2 f-w-600 m-b-1">
                                Drop Up A Message
                            </div>
                            <div className="m-b-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </div>
                            <div className="m-b-1">
                                <input type="text" className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10" placeholder="Your Full Name" />
                            </div>
                            <div className="m-b-1">
                            <input type="text" className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10" placeholder="Your Email Address" />
                            </div>
                            <div className="m-b-1">
                                <select>
                                <option></option>
                                </select>
                            </div>
                            <div className="m-b-1">
                            <TextArea type="text" className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10 c-w" placeholder="Message" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
