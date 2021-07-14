import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./DropAuth.css";

import { Helmet } from "react-helmet";
import theimage from '../shared/CLIx-School-ICT-Lab.png'
import clixdemopicurc from "../shared/clix_dashboard_login_image.png";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 40,
    fontWeight: 300,
  },
});

export default function AboutPage() {
  const classes = useStyles();

  return (
    <>
      {/* <Helmet>
   <title> 
     A CLIx Dashboard 
   </title>

    <meta name="title" content=" A  | CLIxDashboard - implementation metric and learning analytics"/>
<meta name="description" content="fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://staging-clixdashboard.tiss.edu/about"/>
<meta property="og:title" content="A | CLIxDashboard - implementation metric and learning analytics "/>
<meta property="og:description" content=" Fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>
<meta property="og:image" content="https://staging-clixdashboard.tiss.edu/static/media/Banner.1c665a81.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://staging-clixdashboard.tiss.edu/about/"/>
<meta property="twitter:title" content="A  CLIxDashboard - implementation metric and learning analytics"/>
<meta property="twitter:description" content="fake Explore the CLIx implementation monitoring metrics and learning analytics across our partner schools."/>
<meta property="twitter:image" content="https://staging-clixdashboard.tiss.edu/static/media/Banner.1c665a81.png"/>


    </Helmet> */}

      <div className={classes.root} align="justify">
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={6} spacing={1}>
            <Typography variant="h5" align="justify" gutterBottom>
              About
            </Typography>
            <Typography className="text" gutterBottom>
              The Connected Learning Initiative (CLIx) is a technology-enabled
              initiative at scale for high school students. The initiative was
              seeded by Tata Trusts, Mumbai and is led by Tata Institute of
              Social Sciences, Mumbai and Massachusetts Institute of Technology,
              Cambridge, MA USA. CLIx offers a scalable and sustainable model of
              open education, to meet the educational needs of students and
              teachers. Students use CLIx platform regularly generating a lot of
              datasets which are being processed and analyzed to have insights
              about the implementation. This dashboard provides access to the
              visualizations at various levels viz. State, District and School
              Levels.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} alignItems="center">
            <img
              src={clixdemopicurc}
              style={{ paddingTop: 60 }}
              className="img-fluid"
              alt="clix image"
            />
          </Grid> */}
          <h2>About</h2>
          <p>
            {" "}
            CLIxDashboard provides the implementation monitoring metrics and
            learning analytics across the Connected Learning Initiative (CLIx)
            partner schools in the states of Chhattisgarh, Mizoram, Rajasthan
            and Telangana. Currently, the dashboard is in very first release
            v1.0.0 and offers,
          </p>
          <ol>
            <li>
              School level dashboard (with engagement and usage metrics for
              modules, interactive tools and local server){" "}
            </li>
            <li>
              State level visualizations (with engagement and usage metrics for
              modules, interactive tools and local server){" "}
            </li>
            <li>CLIx project level statistics </li>
          </ol>
          <p>
            The schools can login to the dashboard and customize their profile
            with image and other details. While we have attempted to ensure
            reliability and validity of data, needless to say that the dashboard
            and visualizations come with underlying caveats and limitations
            arising from the field diversity, first generation digital learners,
            access without login (feature purposefully kept to maximise usage),
            shared logins and high students to computing device ratio. Hence,
            these metrics and analytics should be viewed as an approximation
            rather than absolute. We strongly encourage you to make note of
            disclaimers and notes while reading the visuals. Additionally, the
            documentation section explains the data processing details.
          </p>
          <p>
            We hope the dashboard would help all collaborating stakeholders -
            government officials, schools heads, teachers and the CLIx teams -
            to transparently monitor the progress, extent and quality of
            programme implementation and plan for supportive actions to improve
            the usage and engagement.
          </p>
          <br />
          <strong> About CLIx</strong>
          <p>
            The Connected Learning Initiative (CLIx) is a technology-enabled
            initiative at scale for high school students. The initiative was
            seeded by Tata Trusts, Mumbai with Tata Institute of Social
            Sciences, Mumbai and Massachusetts Institute of Technology,
            Cambridge, U.S.A. as founding partners. It offers a scalable and
            sustainable model of open education and is a bold effort to bring
            innovation and global best practices, adapted to the Indian context,
            to meet the educational needs of students and teachers.
          </p>
          <p>
            CLIx incorporates thoughtful pedagogical design and leverages
            contemporary technologies to offer high quality, media-rich
            educational modules and resources in the areas of mathematics,
            sciences, communicative English and digital literacy which are being
            offered to students of government secondary schools in Chhattisgarh,
            Mizoram, Rajasthan and Telangana in their regional languages. These
            modules and digital resources which are designed to be interactive,
            foster collaboration, integrate values and 21st century skills are
            offered through CLIxPlatform - a next generation digital learning
            platform specifically designed for connected and collaborative
            learning in resource constrained contexts. The CLIxPlatform can be
            accessed at <a href="https://clixplatform.tiss.edu" target="_blank"> https://clixplatform.tiss.edu </a>
          </p>
          <p></p>
          <p>
            The CLIxPlatform, open assessment engine and embedded digital
            interactives log learning data locally at the CLIx server setup in
            the school ICT lab as shown below:
          </p>
          <br />
          <img
            src={theimage}
            // style={{ paddingTop: 60 }}
            style={{ margin: '0 auto', padding: 20 }}
            className="img-fluid"
            alt="clix image"
          />
          <br/>
          <br/>
          <p>
            The CLIxPlatform is designed to anonymize learner/teacher identities
            at source through the use of pseudonyms such as black-ant,
            green-apple, red-copper. A small portion of data from school based
            CLIx server is opportunistically synced to the central server
            whenever internet connection is available using Syncthing utility
            (let’s call this thin data). However, as many of the CLIx partner
            schools are located in remote geographies without internet
            connectivity, not all schools could sync the data. Therefore,
            annually, the CLIx team also collects the complete data dump from
            the school based server (let’s call this data dump). Finally, all
            the data is collated, cleaned and processed at the secure central
            server and then rendered on CLIxDashboard using D3 and R
            visualization tools.
          </p>
          <p>
            The dashboard is yet to include the data from implementation
            monitoring tool (IMT) which richly and qualitatively captures the
            implementation of CLIx and status of school ICT lab. We aspire to
            add new metrics and visualizations drawing from the humongous
            datasets.
          </p>
          <p>
            Through research and collaboration, CLIx seeks to nurture a vibrant
            ecosystem of partnerships and innovation to improve schooling for
            underserved communities. CLIx was awarded the 2017 UNESCO King Hamad
            Bin Isa Al-Khalifa Prize for the Use of ICTs in Education for its
            outstanding contribution to the theme Use of ICT to Increase Access
            to Quality Education. CLIx also won the OER Collaboration award for
            Excellence 2019, under the category resources, tools and practices
            from the Open Education Consortium.
          </p>{" "}
          <p>
            {" "}
            <strong> CLIx Collaborators: </strong> Centre for Education Research
            and Practice, Jaipur; Department of Education, Mizoram University,
            Aizawl; Eklavya, Bhopal; Homi Bhabha Centre for Science Education,
            TIFR, Mumbai; National Institute of Advanced Studies, Bengaluru;
            State Council of Educational Research and Training (SCERT) of
            Telangana, Hyderabad; State Council of Educational Research and
            Training, Chhattisgarh; Tata ClassEdge, Mumbai; Inter-University
            Centre for Astronomy and Astrophysics, Pune; Government of
            Chhattisgarh; Government of Mizoram; Government of Rajasthan;
            Government of Telangana
          </p>
          <p> Last Updated : 29 June 2021</p>
        </Grid>

        {/* <Typography variant="h5" align='justify' gutterBottom>
        About
      </Typography> */}

        {/* <Typography variant="body2" align='justify' gutterBottom> 
      This demo website provides access to visualisations of various datasets being generated from
      CLIxPlatform - a student learning platform - as part of Connected Learning Initiative (CLIx).
      The objective is that different teams across CLIx project can explore these datasets through
      visualisations built on top of raw data. Also each school can login with its school credentials
      to access school level live dashboards. The data is mainly coming from the CLIx server at the
      school ICT lab through syncthing. Questions explored in these visualisations are outcome of
      collaborative exploration between CLIx technology team and implementation, domain,
      research and various other teams. This is just an alpha site (very initial glimpses) towards an
      aspirational meta-visualization dashboard.
      </Typography>
  */}

        {/* <Typography variant="body2" align="justify" gutterBottom>
      
      
      The Connected Learning Initiative (CLIx) is a technology-enabled initiative at scale for high school students. The initiative was seeded by Tata Trusts, Mumbai and is led by Tata Institute of Social Sciences, Mumbai and Massachusetts Institute of Technology, Cambridge, MA USA. CLIx offers a scalable and sustainable model of open education, to meet the educational needs of students and teachers. 
Students use CLIx platform regularly generating a lot of datasets which are being processed and analyzed to have insights about the implementation. This dashboard provides access to the visualizations at various levels viz. State, District and School Levels.  
      
      </Typography>
            <img src={clixdemopicurc} alt="clix image"/> 
           */}
      </div>
    </>
  );
}
