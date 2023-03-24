import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";

const columns = [
  { id: "name", label: "Price", minWidth: 170 },

  {
    id: "population",
    label: "From",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Expire Time",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Action",
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

export default function StickyHeadTable({
  offers,
  accept_Offer,
  owner,
  wallet_address,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("Offers", offers);

  const addslice = (add) => {
    const first = add.slice(0, 7);
    const seoncds = add.slice(36);
    return first + "..." + seoncds;
  };

  const offer_expire = (time) => {
    try {
      const t = moment(time * 1000)
        .endOf("day")
        .fromNow();
      console.log(time);
      return t;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="f-w-600">
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
                    style={{ minWidth: column.minWidth }}
                    className="f-w-600"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {offers.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align="center">
                      {row.pricePerNFT / 10 ** 18} ETH
                    </TableCell>
                    <TableCell align="center">
                      {addslice(row.offerCreator)}
                    </TableCell>
                    <TableCell align="center">
                      {offer_expire(Number(row.offerExpireTime))}
                    </TableCell>
                    <TableCell align="center">
                      <button
                        onClick={() => accept_Offer(row.offerId)}
                        className="secondary-btn m-t-1"
                      >
                        Accept
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {offers.length > 0 ? (
        ""
      ) : (
        <div className="p-y-5 t-a-c b-c-t">NO DATA TO SHOW</div>
      )}
    </div>
  );
}
