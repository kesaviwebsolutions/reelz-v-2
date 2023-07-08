import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const notify = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);

function Login({ url }) {

  const [Error, setError] = useState(false);
  const [email, setEmail] = useState();
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
      await axios.post(`https://back-sg.r33lz.com/authentication_token`, {
        email: email,
        plainPassword: password,
        syncFirebase:true,

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

      setError(error);
      notifyError(error);
      setOpen(false);
    }
  };
  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <form onSubmit={login}>
          <div className="row">
            <div className="col-12 col-sm-9 col-md-6 m-a">
              <div className="t-a-c f-s-2 f-w-600 m-b-3">
               Login
              </div>
            {/*   <div className="t-a-c m-b-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="t-a-c m-b-2">Or login with account</div> */}
              <div className="m-b-1">
                <input
                  type="text"
                  className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              {/* <div className="m-b-2 d-f j-c-s-b">
                <div className="">Remember for 30 days</div>
                <div className="">Forgot Password?</div>
              </div> */}
              <div className="m-t-2">
                <button className="primary-btn w-100" type="submit">Login</button>
              </div>
         <div className="t-a-c m-t-2">Getting started <Link to="/signup"> sign up here</Link></div> 
            </div>
            </div>
            
            </form>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
       
      >
   
          {" "}
          <CircularProgress color="inherit" />

      
      </Backdrop>
    </div>
  );
}

export default Login;
