import React from "react";
//import { Link as RouterLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import './DropAuth.css'
import clogo from '../shared/clogo.png'
import tataimage from '../shared/tata_trusts.svg'
import ShareIcon from "@material-ui/icons/Share";
import tissimage from '../shared/tisstiss.svg'

import mitimage from '../shared/mit.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    
  },

}));


function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      

     
 <hr/>
      <Grid container justify="center" >
      


        <Grid item xs={12} sm={3} md={3} align="center">
          <a href="https://www.tatatrusts.org/" target="_blank" rel="noopener" >
          <img
            style={{ marginTop: 10 }}
            src={tataimage} 
            alt="tata trust"
            
          />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={6} align="center">
          <Typography style={{ paddingRight: '40px'}}>Led by</Typography>
          <span>
            {" "} 
            <a href="https://www.tiss.edu/" target="_blank" rel="noopener">            <img
              style={{ width: "140px", paddingRight: '30px' }}
              src={tissimage}
              alt="tiss"
            />
            </a>
          </span>
          <span>
            {" "}
            <a href="https://mit.edu/" target="_blank" rel="noopener">
            <img
              style={{ width: "160px"  }}
              src={mitimage}
              alt="themit"
            />
            </a>
          </span>
        </Grid>

        <Grid item xs={12} sm={3} md={3} align="center"  >
          <ul style={{ listStyle: "none",  marginTop: 10, marginRight:20, textAlign:"left" }}  class="footer-link" >
            <li className="Navlink-color">
              <NavLink className="colorNavlink" to="/about" rel="noopener" target="_blank">
                About{" "}
              </NavLink>
            </li>
            {/* <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/faq" rel="noopener">
                FAQ{" "}
              </NavLink>
            </li> */}
   <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/credits" rel="noopener" target="_blank">
                {" "}
                Credits{" "}
              </NavLink>
            </li>



            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/termsofservices" rel="noopener" target="_blank">
                Terms of Services
              </NavLink>
            </li>
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="/privacy" rel="noopener" target="_blank">
                Privacy Policy{" "}
              </NavLink>
            </li>
        
        
            <li className="Navlink-color">
              {" "}
              <NavLink className="colorNavlink" to="https://github.com/CLIxIndia-Dev/CLIxDashboard" rel="noopener" target="_blank">
                {" "}
                <i class="fa fa-github 2x" aria-hidden="true"></i> GitHub{" "}
              </NavLink>
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr />
      <Grid container justfy="center" style={{fontWeight: 300}}>
        <Grid item xs={12} sm={6} md={6} lg={6} align="left"   >
          © 2019-{new Date().getFullYear()} Tata Institute of Social Sciences and Massachusetts
          Institute of Technology
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className="themaile">
          
          <i className=" fa fa-globe 2x"> </i> Visit our site:{" "}
          <a href="https://clix.tiss.edu"  target="_blank" rel='noreferrer' style={{ marginRight: 50}}> clix.tiss.edu</a>
          <br />
          <i className="fa fa-envelope 2x"></i> Contact us:{" "}
          <a href="mailto:contact@clix.tiss.edu" rel='noreferrer' align="left" target="_blank"> contact@clix.tiss.edu </a>
        </Grid>
        <Box display={ {xs:'block',sm:'none', md:'none'}}>
        <a href="#"  href="https://www.facebook.com/cetei.tiss/?ref=bookmarks" target="_blank" aria-label="button for facebook"  href="https://twitter.com/@cetei_tiss" rel='noreferrer' className="icon-button twitter"><i className="fa fa-twitter"></i><span></span></a>
<a href="#" aria-lable="button for facebook"  href="https://www.facebook.com/cetei.tiss/?ref=bookmarks"  className="icon-button facebook" target="_blank" rel='noreferrer'><i className="fa fa-facebook"></i><span></span></a>
<a href="#" aria-label="button for youtube" href="https://www.youtube.com/channel/UCHeg9vBiapABVkb6TTWBgYA"  className="icon-button youtube" target="_blank"  rel='noreferrer'><i className="fa fa-youtube"></i><span></span></a>
<a href="#" aria-label="button for instgram" href="https://www.instagram.com/cetei_tiss/"  className="icon-button pinterest" rel='noreferrer' target="_blank"><i className="fa fa-instagram"></i><span></span></a>
              
     
          </Box>
     <Typography variant="inherit" >  
        Except where otherwise noted, content on this site is licensed under a{" "}
        <br />
        Creative Commons Attribution 4.0 International license   <a href="https://creativecommons.org/licenses/by/4.0" rel='noreferrer' target="_blank"> <img src={clogo} alt="logo for cc"/>  </a>
        {/* <span> <i className="fa fa-copyright 2x"></i> </span> */}
  </Typography>
      </Grid>
      {/* <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        Connected Learning Initiative (CLIx), CEIAR, TISS

      </Link>{' '}

  
      {new Date().getFullYear()}
    </Typography> */}
    </div>
  );
}
/*
function Footer(props){
    return(
      <div align="center">
       &copy; {new Date().getFullYear()} Copyright: Connected Learning Initiative (CLIx), CEIAR, TISS
      </div>
    );
}
*/
export default Footer;
