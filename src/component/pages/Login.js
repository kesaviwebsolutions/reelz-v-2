import React from "react";

function Login() {
  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <div className="row">
            <div className="col-12 col-sm-9 col-md-6 m-a">
              <div className="t-a-c f-s-2 f-w-600 m-b-1">
                What is Lorem Ipsum?
              </div>
              <div className="t-a-c m-b-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="t-a-c m-b-2">Or login with account</div>
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="User Name"
                />
              </div>
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Password"
                />
              </div>
              <div className="m-b-2 d-f j-c-s-b">
                <div className="">Remember for 30 days</div>
                <div className="">Forgot Password?</div>
              </div>
              <div className="">
                <button className="primary-btn w-100">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
