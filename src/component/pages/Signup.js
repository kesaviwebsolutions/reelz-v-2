import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Login({ url }) {

  const [name, setnames] = useState();
  const [email, setemails] = useState();
  const [bio, setbios] = useState();
  const [password, setpasswords] = useState();
  const [Error, setError] = useState(false);
  const notify = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  console.log("user", url);

  const signup = async (e) => {
    e.preventDefault();


    try {

      setOpen(true);
      await axios
        .post(`https://back-sg.r33lz.com/api/users`, {
           email: email,
          plainPassword: password,
          name: name,
          bio: bio,
        })

        .then((res) => {
          localStorage.setItem(
            "gettinguserdetailsViaPhone",
            JSON.stringify(res.data)
          );
          console.log("res", res.data)
          const usersignupupdateData = JSON.parse(
            localStorage.getItem("gettinguserdetailsViaPhone")
          );

          window.location.href = `/`;
        });
      notify("Signup Successful!");
      setOpen(false);
    } catch (error) {
      setError(error);
      notifyError(error);
      setOpen(false);
    }

  };

  {
    /* --------------loader------------ */
  }
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  console.log(name,"1", bio, email, password);

  return (
    <div>
      <div className="container-kws">
        <div className="section">
          <div className="row">
            <form onSubmit={signup}>
              <div className="col-12 col-sm-9 col-md-6 m-a">
                <div className="t-a-c f-s-2 f-w-600 m-b-3">
             Signup
                </div>
            {/*     <div className="t-a-c m-b-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </div>
                <div className="t-a-c m-b-2">Or login with account</div> */}
                <div className="m-b-1">
                  <input
                    type="text"
                    className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setnames(e.target.value)}
                  />
                </div>
                <div className="m-b-1">
                  <input
                    type="text"
                    className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemails(e.target.value)}
                  />
                </div>
                <div className="m-b-1">
                  <input
                    type="text"
                    className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setbios(e.target.value)}
                  />
                </div>
                <div className="m-b-1">
                  <input
                    type="password"
                    className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpasswords(e.target.value)}
                  />
                </div>
                {/*    <div className="m-b-1">
          <input
            type="password"
            className="b-c-p-c-11 b-n pa-0_5 w-100 b-r-10"
            placeholder="Confirm Password"
          />
        </div> */}
               {/*  <div className="m-b-2 d-f j-c-s-b">
                  <div className="">Remember for 30 days</div>
                  <div className="">Forgot Password?</div>
                </div> */}
                <div className="m-t-2">
                  <button className="primary-btn w-100" type="Submit">Signup</button>
                </div>
                <div className="t-a-c m-t-2">Already have an account <Link to="/login"> login here</Link></div>

              </div>
            </form>
          </div>
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
