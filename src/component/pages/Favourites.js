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
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { BiTag } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const columns = [
  { id: "Image", label: "Name", minWidth: 170 },
  { id: "code", label: "Blockchain", minWidth: 100 },
  {
    id: "population",
    label: "Author",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];
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
          <div>
          <div className="">
            <div className="">
              <div className="m-b-2">
                <div className="f-s-2 f-w-600">Favourites</div>
              </div>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }} className="b-c-t c-w">
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    className="b-c-t c-w"
                  >
                    <TableHead className="b-c-t c-w">
                      <TableRow className="b-c-t c-w">
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align="center"
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell align="center">a</TableCell>
                        <TableCell align="center">a</TableCell>
                        <TableCell align="center">a</TableCell>
                     
                        <TableCell align="center">
                        a
                        </TableCell>
                        <TableCell align="center">
                        <BsThreeDots />
                      </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
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
