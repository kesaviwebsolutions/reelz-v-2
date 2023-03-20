import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Form } from "react-bootstrap";
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
                            <Form.Select aria-label="Default select example" className="b-c-p-c-11 b-n">
                           
                            <option value="1">Select Subject</option>
                            <option value="2">Select Subject</option>
                            <option value="3">Select Subject</option>
                          </Form.Select>
                            </div>
                            <div className="m-b-2">
                            <TextArea type="text" className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10 c-w" placeholder="Message" />
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

export default Contact;
