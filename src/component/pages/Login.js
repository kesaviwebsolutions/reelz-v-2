import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const notify = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);

function Login({ url }) {

  const [Error, setError] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  {
    /* --------------loader------------ */
  }
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };



  const login = async (e) => {
    try {
      e.preventDefault();
      setOpen(true);
      await axios.post(`${url}/api/users`, {
        name: username,
        plainPassword: password,

      })
        .then((res) => {

          localStorage.setItem(
            "gettinguserdetailsViaPhone",
            JSON.stringify(res.data)
          );
          const usersignupupdateData = JSON.parse(
            localStorage.getItem("gettinguserdetailsViaPhone")
          );
          window.location.href = `/`;
        });
      setOpen(false);
      notify("Successfully Login");

    } catch (error) {

      setError(error.response.data.message);
      notifyError(error.response.data.message);
      setOpen(false);
    }
  };
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="m-b-2 d-f j-c-s-b">
                <div className="">Remember for 30 days</div>
                <div className="">Forgot Password?</div>
              </div>
              <div className="">
                <button className="primary-btn w-100">Login</button>
              </div>
              {/*    <div className="t-a-c m-t-2">Getting started <Link to="/signup"> sign up here</Link></div> */}
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        className="d-b t-a-c "
      >
        <div className="d-b m-t-50vh">
          {" "}
          <CircularProgress color="inherit" />
        </div>
        <div className="d-b">

        </div>
      </Backdrop>
    </div>
  );
}

export default Login;
