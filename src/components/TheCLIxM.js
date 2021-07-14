import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  CLIxphase from '../shared/Reach_.png'
import CLixPhase from '../shared/Reach_2021_900x500_v1-02-1.png'
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
    // margin: 20,
    // padding: '20px 20px'
  },
  
}));

export default function TabGlance() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
  
    <div className="container">
    <div className={classes.root} justify="center">
        <Typography align='center' style={{margin:40}} gutterBottom >

           <h2> CLIx at a Glance  </h2>
        </Typography>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="CLIx Phase - I " {...a11yProps(0)} />
          <Tab label="CLIx Phase - II " {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        <img src="https://clixoer.tiss.edu/static/ndf/Abtpg2.png" 
        className="img-fluid" alt="" style={{width: '100%'}} />
      </TabPanel> */}
      <TabPanel value={value} index={0}>
      <img src={CLIxphase} className="img-fluid" alt="{CLIxphase}" width="100%" height="100%"  />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src={CLixPhase} className="img-fluid" alt="{CLIxphase}" width="100%" height="100%"  />

      </TabPanel>
 </div>

 </div>
<div className="container-fluid" style={{backgroundColor: '#f1f1f1', padding: '0px 20px 20px 20px'}}>
  <hr/>
  <p className="bold">Citation:</p> 
  <p style={{fontWeight: 300}}> Connected Learning Initiative (2019-21). CLIx Dashboard. Retrieved from <a href="https://clixdashboard.tiss.edu" rel='noreferrer'  target="_blank"> https://clixdashboard.tiss.edu </a> </p>
</div>
 </>
  );
}
