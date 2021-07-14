import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { Helmet } from "react-helmet";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "20px",
    fontWeight: 300,
    justifyItems: "space-between",
  },
});

export default function Credits() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="container text-justify">
        <h2> Credits</h2>
        <br/>
        <p>
          CLIxDashboard provides the implementation monitoring metrics and
          learning analytics across CLIx partner schools in Chhattisgarh,
          Mizoram, Rajasthan and Telangana.
        </p>
        <p>
          <strong>
            {" "}
            If you use any of the data or visualizations from this site please
            use below citation:{" "} 
          </strong> <br/>
          Connected Learning Initiative (2019-21). CLIx Dashboard. Retrieved
          from <a href="https://clixdashboard.tiss.edu " target="_blank">https://clixdashboard.tiss.edu </a>
        </p>
        <p>
          {" "}
          CLIxDashboard is a result of collaborative work between teams at the
          Tata Institute of Social Sciences, Mumbai, India; the Massachusetts
          Institute of Technology, Cambridge, MA USA; and, the Homi Bhabha
          Centre for Science Education, TIFR, Mumbai, India. The Tata Trusts
          supported all aspects of the initiative, not only through generously
          resourcing the work but also engaging with all its aspects in depth
          and with engagement and shared interest.
        </p>
        <p>
          We gratefully acknowledge the support received from the State
          Governments of Chhattisgarh, Mizoram, Rajasthan and Telangana and
          their dynamic leadership from the state to the districts, blocks,
          clusters and schools, who have supported CLIx whole heartedly from the
          start in 2015.
        </p>
        <p>
          We would also like to acknowledge the efforts made by,{" "}
          <strong> school heads and teachers </strong> who actively engage with
          the CLIx modules and sync the learning data to central server;   <strong> CLIx
          field </strong>  team members who setup the school ICT labs and sync the learning
          data to central server and also collect data dump; CLIx <strong>  implementation
          team </strong>  members who design and anchor the programme implementation; CLIx
          <strong>   technology team </strong>  members who design & develop the data analytics with
          CLIxPlatform and the overall CLIxDashboard mechanisms including data
          collection and processing; and the CLIx <strong>  domain and research team </strong> 
          members who have designed the CLIx modules, learning tools and
          underlying data schemata.
        </p>

        <strong> Technology Team</strong>
        <hr />
        <p>
          The CLIx technology team designs & develops the overall CLIxDashboard
          including architecting the data collection and processing mechanisms
          and maintains the website and data.
        </p>
        <ul>
          <li> Durga Swetha, Back-end Engineer </li>
          <li> Mrunal Nachankar, System Administrator</li>
          <li> Nagarjuna. G, Technology Architect</li>
          <li> Parathasarathi Edupally, Data Engineer</li>
          <li> Sadaqat Mulla, Project Manager</li>
          <li> Satej Shende, Technology Manager</li>
          <li> Shivani Dixit, System Administrator</li>
          <li> Shwetha Srinivasan, Junior Data Engineer</li>
          <li> Vighnesh Nair, Software Test Engineer</li>
          <li> Yogesh Bhavsar, Front-end Engineer</li>
        </ul>
        <br />

        <strong> Implementation Team</strong>
        <hr />
        <p>
          {" "}
          The CLIx implementation team designs and anchors the programmatic
          implementation of CLIx in schools and works with the government
          officials at the state, district, block and cluster levels.
        </p>
        <ul>
          <li> Ajay Kumar Singh, Professor & Co-PI</li>
          <li> Garima Singh Gomber, Senior Programme Manager</li>
          <li> Omkar Balli, Team Lead & Co-PI</li>
          <li> Sahana V.P, Field Action Research Fellow (Junior)</li>
          <li> Saurav Mohanty, Team Lead, Chhattigarh</li>
          <li> Shashank Parimi, Team Lead, Telangana</li>
        </ul>
        <br />

        <strong>Field Team</strong>
        <hr />
        <p> 
          {" "}
          The CLIx field team sets up the school ICT labs and syncs the learning
          data to the central server, coordinates with teachers and also
          periodically collects data dump from the school server.
        </p>
        <ul>
          <li> Amitabh Anand, Field Technologist, Chattisgarh </li>
          <li> Sanjeeva Singh, Junior Field Technologist, Chattisgarh </li>
          <li> Lalmuanawma Bawitlung, Field Technologist, Mizoram </li>
          <li> Lalremkima Tuallawt, Field Resource Coordinator, Mizoram </li>
          <li> Lalrindika, Field Resource Coordinator, Mizoram </li>
          <li> Robert Lalramhluna, Field Resource Coordinator, Mizoram </li>
          <li> Rahul Rawal, Field Resource Coordinator, Rajasthan </li>
          <li> Vivek Kumar Saini, Field Technologist, Rajasthan </li>
          <li> Arshad Khan, Field Technologist, Telangana </li>
          <li> Moola Ramanakar Reddy, Field Technologist, Telangana </li>
          <li> Raju Sambari, Field Resource Coordinator, Telangana </li>
          <li> Ramesh Nagula, Field Resource Coordinator, Telangana </li>
          <li> Santhosh Miriyala, Field Technologist, Telangana </li>
          <li> Swamy Jadala, Field Technologist, Telangana </li>
        </ul>
        <br />

        <strong>Website Graphics Design:</strong>
        <ul>
          <li> Ramesh Prakash Khade </li>
        </ul>
      </div>
    </div>
  );
}
