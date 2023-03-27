import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import detailowner from "../Image/detailowner.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({properties, owner}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addslice = (add) => {
    const first = add.slice(0, 7);
    const seoncds = add.slice(36);
    return first + "..." + seoncds;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Details" {...a11yProps(0)} className="c-w" />
          <Tab label="History" {...a11yProps(1)} className="c-w" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="">Current Owner</div>
        <div className="d-f a-i-c m-t-1">
          <div className="">
            <img src={detailowner} className="b-r-20" /> &nbsp;
          </div>
          <div className="">{addslice(owner)}</div>
        </div>
        <div className="m-t-1">Properties</div>
        {properties.map((res)=>{
          return <div className="secondary-btn d-f m-t-1  "> {res.type}: {res.value}</div>
        })}
  

      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="history">
        <div className="d-f j-c-s-b m-b-1">
          <div className="">
            <img src={detailowner} className="b-r-10" /> &nbsp;
          </div>
          <div className="">
            <div className="f-w-600">Mason Woodward</div>
            <div className="f-s-0_8">place a bid</div>
            <div className="f-s-0_8">8 hours ago</div>
          </div>
          <div className="">
          <div className="">4.89 ET</div>
          <div className="f-s-0_8">$12.245</div>
          </div>
        </div>
        <div className="d-f j-c-s-b m-b-1">
        <div className="">
          <img src={detailowner} className="b-r-10" /> &nbsp;
        </div>
        <div className="">
          <div className="f-w-600">Mason Woodward</div>
          <div className="f-s-0_8">place a bid</div>
          <div className="f-s-0_8">8 hours ago</div>
        </div>
        <div className="">
        <div className="">4.89 ET</div>
        <div className="f-s-0_8">$12.245</div>
        </div>
      </div>
        
        </div>
      </TabPanel>
    </Box>
  );
}
