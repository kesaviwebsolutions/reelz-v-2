import { Grid } from "@mui/material";
import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";

function Home() {
  return (
    <>
      <div className="section ">
        <div className="">
          <h1 className="m-y-2 animate__animated animate__bounce ">
            Current Listings
          </h1>
        </div>
        <input type="text" className="p-0_5 b-r-10 w-100" />

        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="b-c-t c-i b-c-i m-t-2"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu className="">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Grid container className="b-1">
          <Grid item xs={6} className="b-1">
            A
          </Grid>
          <Grid item xs={6} className="b-1">
            A
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
