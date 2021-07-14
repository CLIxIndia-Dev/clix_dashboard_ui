import React from "react";
//import { Link as RouterLink } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: 300,
    textAlign: "justifly",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Privacy() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title> CLIx Dashboard Privacy </title>
      </Helmet>

      {/* Privacy Policy

This policy describes our approach to your personal data and comes into effect on the 1st April 2019.

At the Connected Learning Initiative (CLIx), we care about the confidentiality and security of your personal information. We will use all reasonable efforts to keep your Personal Information secure, in compliance with this Privacy Policy. 
"Personal Information" is defined below. As used in this Privacy Policy, "we", "us", and "our" refer to CLIx.
This Privacy Policy only applies to information that we collect through the CLIxDashboard Website (the "Site", which consists of all content and pages located within the clixdashboard[dot]tiss[dot]edu web domain) and does not apply to information that we may collect from you in other ways (for example, this policy does not apply to information that you may provide to us over the phone, by fax, or through conventional mail).

1. USER-NAMES AND POSTINGS
2. CONSENT TO PROCESSING OF DATA
3. PERSONAL INFORMATION
4. INFORMATION WE COLLECT AND HOW WE USE IT
5. USE TERMS AND DISCLOSURE TO THIRD PARTIES
6. USE FOR PERSONALIZATION AND PEDAGOGICAL IMPROVEMENTS
7. SECURITY
8. CHANGING OUR PRIVACY POLICY
9. PRIVACY CONCERNS
 
1. USER-NAMES AND POSTINGS
Comments or other information posted by you to our school dashboard profile, forums, wikis, contact us forms or other areas of the Site designed for public communications or communications among registered CLIxDashboard members may be viewed and downloaded by others who visit the Site. For this reason, we encourage you to use discretion when deciding whether to post any information that can be used to identify you to those forums (or other public or classified areas).


2. CONSENT TO PROCESSING OF DATA
By using our Site, or providing information to CLIxDashboard, you understand and unambiguously consent to the collection, use, disclosure and retention of information in India or any other country or territory as decided by CLIx administration, for the purposes set forth in this Privacy Policy and the  CLIx Terms of Service. You hereby consent to the collection, use, disclosure, and retention by CLIx of your Personal Information as described under this Privacy Policy, including but not limited to the transfer of your personal data between CLIx and the third parties, affiliates, and subsidiaries described in this Privacy Policy. For further certainty, any consent relating to a right to transfer information referred to in this paragraph shall be deemed to include your consent to the transfer of the applicable Personal Information to a jurisdiction which may provide a different level of privacy protection than that available in your country.
If you do not agree with these terms, then please do not access, browse, or register for the Site. If you choose not to provide us with certain information required to provide you with various services offered on our Site, you may not be able to establish a user account and we may not be able to provide you with those services.


3. PERSONAL INFORMATION
As used in this Privacy Policy, "Personal Information" means any information about yourself that you may provide to us when using the Site, such as when you sign up for a user account or enter into a transaction through the Site, which may include (but is not limited to) your name, contact information, gender, date of birth and occupation.
We endeavour to limit the collection of Personal Information to what we need with respect to specific Site activities in order to satisfy business, legal, or regulatory requirements. 


4. INFORMATION WE COLLECT AND HOW WE USE IT
We collect information, including Personal Information (described above), when you sign up for a user account, participate in online data exploration, send us email messages and/or participate in our public forums. We also collect certain usage information about user performance and patterns of usage. In addition, we track information indicating, among other things, which pages of our Site were visited, the order in which they were visited, when they were visited and which hyperlinks and other user interface controls were used.
We may log the IP address, operating system, and browser software used by each user of the Site, and we may be able to determine from an IP address a user's Internet Service Provider and the geographic location of his or her point of connectivity. Various web analytics tools are used to collect this information. Some of the information is collected through cookies (small text files placed on your computer that store information about you, which can be accessed by the Site). You should be able to control how and whether cookies will be accepted by your web browser. Most browsers offer instructions on how to reset the browser to reject cookies in the "Help" section of the toolbar. If you reject our cookies, some functions and conveniences of this Site may not work properly.


5. USE TERMS AND DISCLOSURE TO THIRD PARTIES
We may collect the following kinds of data and use the same for some specific purposes as under: 
    • For the purpose for which you specifically provided the information, for example, to respond to a specific inquiry or provide you with access to the specific course content and/or services you select.
    • To track both individual and aggregate dashboard usage and to analyze usage analytics statistics on student performance and how learners learn, how they interact and whate are the challenges that are being faced by the learners.
    • To monitor and detect violations of the Honour Code, the Terms of Service, as well as other misuse and potential misuse of the Site.
    • To publish information, but not Personal Information, gathered about CLIxPlatform access, use, impact, and learners' performance.
    • To send you updates about the site or to send you email messages about Site maintenance or updates.
    • To archive this information and/or use it for future communication with you.
    • To maintain and improve the functioning and security of the Site and our software, systems, and network.
    • For purposes described elsewhere in this Privacy Policy (including, eg. Sharing with Third Parties).
    • As otherwise described to you at the point of collection or pursuant to your consent.
    • To authenticate your identity when you register for Honour Code Certificate.
    • With other visitors to the Site, to the extent that you submit comments, course work, or other information or content (collectively, "Postings") to a portion of the Site that may be designed for public communication; and with other members of a CLIx class of which you are a member, to the extent you submit Postings to a portion of the Site designed for viewing by those class members. We may provide your Postings to users who later enrol in the same classes as you, within the context of the forums, the courseware, or otherwise. If we do re-post your Postings originally made to non-public portions of the Site, we will post them without your real name and email (except with your express permission), but we may use your username without your consent.
    • To provide opportunities for you to communicate with other users who may have similar interests or educational goals. For instance, we may recommend specific study partners or connect potential learners and mentors. In such cases, we may use all information collected about you to determine who might be interested in communicating with you, but we will only provide other users your username, and not disclose your real name or e-mail address to your contact.
    • To respond to investigations, court orders, or other legal process; to investigate, or prevent, or take action regarding illegal activities, suspected fraud, or security or technical issues, or to enforce our, our Honour Code, or this Privacy Policy; as otherwise may be required by applicable law; or to protect our rights, property, or safety or those of others.
    • As otherwise described to you at the point of collection or pursuant to your consent.
    • For integration with third party services. For example, videos and other content may be hosted on YouTube and other websites not controlled by CLIx.
    • In addition, we may share aggregated information that does not personally identify you with the public and with third parties.


6. USE FOR PERSONALIZATION AND PEDAGOGICAL IMPROVEMENTS
Our goal is to provide current and future visitors with the best possible educational experience. To further this goal, we sometimes present different users with different versions & adaptations of the content and software. We do this to personalize the experience to the individual users (assess the user's level of ability and learning style, and present materials best suited to the user), to evaluate the effectiveness of our content, to improve our understanding of the learning process and to otherwise improve the effectiveness of our offerings. We may publish or otherwise publicize results from this process, but, unless otherwise permitted under this Privacy Policy, those publications or public disclosures will not include Personal Information.


7. SECURITY
CLIx has a policy designed to protect Personal Information in its possession or control. This is done through a variety of privacy and security policies, processes, and procedures, including administrative, physical, and technical safeguards that reasonably and appropriately protect the confidentiality, integrity, and availability of the Personal Information that it creates, receives, maintains, or transmits. Nonetheless, no method of transmission over the Internet, or method of electronic storage, is 100% secure; and therefore, CLIx cannot guarantee its absolute security.


8. CHANGING OUR PRIVACY POLICY
Please note that we review and may make changes to this Privacy Policy from time to time. When changes are made, the Privacy Policy link will include a notation "Revised (date)." indicating that you should review the new terms, which will be effective immediately upon posting on this page, with an updated effective date. The notation will be included in the Privacy Policy link for at least seven (7) days after the update has been made. By accessing the Site after any changes have been made, you signify your agreement on a prospective basis to the modified Privacy Policy and any changes contained therein. In case you miss the notification referenced above, be sure to return to this page periodically to ensure familiarity with the most current version of this Privacy Policy.


9. PRIVACY CONCERNS
If you have privacy concerns, have disclosed data you would prefer to keep private, or would like to access the information we maintain about you, please do contact us at contact@clix.tiss.edu

Effective Date: 1st April 2019 */}

      <div className="container text-justify">
        <h2>Privacy Policy</h2>
        <p>
          This policy describes our approach to your personal data and comes
          into effect on the 1st April 2019.
        </p>{" "}
        <p>
          At the Connected Learning Initiative (CLIx), we care about the
          confidentiality and security of your personal information. We will use
          all reasonable efforts to keep your Personal Information secure, in
          compliance with this Privacy Policy. "Personal Information" is defined
          below. As used in this Privacy Policy, "we", "us", and "our" refer to
          CLIx.
        </p>
        <p>
          This Privacy Policy only applies to information that we collect
          through the CLIxDashboard Website (the "Site", which consists of all
          content and pages located within the clixdashboard[dot]tiss[dot]edu
          web domain) and does not apply to information that we may collect from
          you in other ways (for example, this policy does not apply to
          information that you may provide to us over the phone, by fax, or
          through conventional mail).
        </p>
        <strong>
          <a href="#1"> 1. USER-NAMES AND POSTINGS </a> <br />
          <a href="#2">2. CONSENT TO PROCESSING OF DATA </a> <br />
          <a href="#3">3.PERSONAL INFORMATION </a> <br />
          <a href="#4">4. INFORMATION WE COLLECT AND HOW WE USE IT </a> <br />
          <a href="#5"> 5. USE TERMS AND DISCLOSURE TO THIRD PARTIES </a> <br />
          <a href="#6">
            6. USE FOR PERSONALIZATION AND PEDAGOGICAL IMPROVEMENTS{" "}
          </a>{" "}
          <br />
          <a href="#7"> 7. SECURITY </a> <br />
          <a href="#8"> 8. CHANGING OUR PRIVACY POLICY </a> <br />
          <a href="#9"> 9. PRIVACY CONCERNS </a> <br />
          {/* <a href="#10"> 10. INDEMNIFICATION </a> <br/>
 <a href="#12">  11. MISCELLANEOUS </a> <br/>  
 <a href="#13">12. CLIx HONOUR CODE PLEDGE </a> <br/> */}
        </strong>
        <br />
        <strong id="1"> 1.USER-NAMES AND POSTINGS </strong>
        <br />
        <p>
          Comments or other information posted by you to our school dashboard
          profile, forums, wikis, contact us forms or other areas of the Site
          designed for public communications or communications among registered
          CLIxDashboard members may be viewed and downloaded by others who visit
          the Site. For this reason, we encourage you to use discretion when
          deciding whether to post any information that can be used to identify
          you to those forums (or other public or classified areas).
        </p>
        <strong id="2"> 2. CONSENT TO PROCESSING OF DATA </strong>
        <p>
          By using our Site, or providing information to CLIxDashboard, you
          understand and unambiguously consent to the collection, use,
          disclosure and retention of information in India or any other country
          or territory as decided by CLIx administration, for the purposes set
          forth in this Privacy Policy and the CLIx Terms of Service. You hereby
          consent to the collection, use, disclosure, and retention by CLIx of
          your Personal Information as described under this Privacy Policy,
          including but not limited to the transfer of your personal data
          between CLIx and the third parties, affiliates, and subsidiaries
          described in this Privacy Policy. For further certainty, any consent
          relating to a right to transfer information referred to in this
          paragraph shall be deemed to include your consent to the transfer of
          the applicable Personal Information to a jurisdiction which may
          provide a different level of privacy protection than that available in
          your country. </p>
        <p>    If you do not agree with these terms, then please do not
          access, browse, or register for the Site. If you choose not to provide
          us with certain information required to provide you with various
          services offered on our Site, you may not be able to establish a user
          account and we may not be able to provide you with those services. 
        </p>
        <strong id="3"> 3. PERSONAL INFORMATION </strong> 
        <br/>
        <p>
          As used in this Privacy Policy, "Personal Information" means any
          information about yourself that you may provide to us when using the
          Site, such as when you sign up for a user account or enter into a
          transaction through the Site, which may include (but is not limited
          to) your name, contact information, gender, date of birth and
          occupation. 
         <br/>  We endeavour to limit the collection of Personal
          Information to what we need with respect to specific Site activities
          in order to satisfy business, legal, or regulatory requirements.
        </p>
        <strong id="4"> 4. INFORMATION WE COLLECT AND HOW WE USE IT </strong>
        <p>
          We collect information, including Personal Information (described
          above), when you sign up for a user account, participate in online
          data exploration, send us email messages and/or participate in our
          public forums. We also collect certain usage information about user
          performance and patterns of usage. In addition, we track information
          indicating, among other things, which pages of our Site were visited,
          the order in which they were visited, when they were visited and which
          hyperlinks and other user interface controls were used. We may log the
          IP address, operating system, and browser software used by each user
          of the Site, and we may be able to determine from an IP address a
          user's Internet Service Provider and the geographic location of his or
          her point of connectivity. Various web analytics tools are used to
          collect this information. Some of the information is collected through
          cookies (small text files placed on your computer that store
          information about you, which can be accessed by the Site). You should
          be able to control how and whether cookies will be accepted by your
          web browser. Most browsers offer instructions on how to reset the
          browser to reject cookies in the "Help" section of the toolbar. If you
          reject our cookies, some functions and conveniences of this Site may
          not work properly.
        </p>
        <strong id="5">5. YOUR RIGHT TO USE CONTENT ON THE SITE </strong>
       <p> We may collect the following kinds of data and use the same for some
        specific purposes as under: <br/>
         • For the purpose for which you specifically
        provided the information, for example, to respond to a specific inquiry
        or provide you with access to the specific course content and/or
        services you select. 
        <br/> • To track both individual and aggregate dashboard
        usage and to analyze usage analytics statistics on student performance
        and how learners learn, how they interact and whate are the challenges
        that are being faced by the learners. 
        <br/> • To monitor and detect violations
        of the Honour Code, the Terms of Service, as well as other misuse and
        potential misuse of the Site. 
        <br/> • To publish information, but not Personal
        Information, gathered about CLIxPlatform access, use, impact, and
        learners' performance.<br/> 
        • To send you updates about the site or to send
        you email messages about Site maintenance or updates.
        <br/> • To archive this
        information and/or use it for future communication with you. • To
        maintain and improve the functioning and security of the Site and our
        software, systems, and network. <br/>
         • For purposes described elsewhere in
        this Privacy Policy (including, eg. Sharing with Third Parties). • As
        otherwise described to you at the point of collection or pursuant to
        your consent. <br/> • To authenticate your identity when you register for
        Honour Code Certificate. <br/>
         • With other visitors to the Site, to the
        extent that you submit comments, course work, or other information or
        content (collectively, "Postings") to a portion of the Site that may be
        designed for public communication; and with other members of a CLIx
        class of which you are a member, to the extent you submit Postings to a
        portion of the Site designed for viewing by those class members. We may
        provide your Postings to users who later enrol in the same classes as
        you, within the context of the forums, the courseware, or otherwise. If
        we do re-post your Postings originally made to non-public portions of
        the Site, we will post them without your real name and email (except
        with your express permission), but we may use your username without your
        consent. <br/>
         • To provide opportunities for you to communicate with other
        users who may have similar interests or educational goals. For instance,
        we may recommend specific study partners or connect potential learners
        and mentors. In such cases, we may use all information collected about
        you to determine who might be interested in communicating with you, but
        we will only provide other users your username, and not disclose your
        real name or e-mail address to your contact. <br/> • To respond to
        investigations, court orders, or other legal process; to investigate, or
        prevent, or take action regarding illegal activities, suspected fraud,
        or security or technical issues, or to enforce our, our Honour Code, or
        this Privacy Policy; as otherwise may be required by applicable law; or
        to protect our rights, property, or safety or those of others. <br/>
         • As
        otherwise described to you at the point of collection or pursuant to
        your consent. <br/>
         • For integration with third party services. For example,
        videos and other content may be hosted on YouTube and other websites not
        controlled by CLIx. <br/> • In addition, we may share aggregated information
        that does not personally identify you with the public and with third
        parties.
        </p>
        {/* <ul>
 <li> </li>  


 </ul> */}
        <p></p>
        <strong id="6"> 6. USER POSTINGS </strong> 
        <p>
          Our goal is to provide current and future visitors with the best
          possible educational experience. To further this goal, we sometimes
          present different users with different versions & adaptations of the
          content and software. We do this to personalize the experience to the
          individual users (assess the user's level of ability and learning
          style, and present materials best suited to the user), to evaluate the
          effectiveness of our content, to improve our understanding of the
          learning process and to otherwise improve the effectiveness of our
          offerings. We may publish or otherwise publicize results from this
          process, but, unless otherwise permitted under this Privacy Policy,
          those publications or public disclosures will not include Personal
          Information.
        </p>
        <p>
          License Grant to CLIx: By submitting or distributing your User
          Postings, you hereby grant to CLIx within India and worldwide,
          non-exclusive, transferable, assignable, sub licensable, fully
          paid-up, royalty-free, perpetual, irrevocable right and license to
          host, transfer, display, perform, reproduce, modify, distribute,
          re-distribute, re-license and otherwise use, make available and
          exploit your User Postings, in whole or in part, in any form and in
          any media formats and through any media channels (now known or
          hereafter developed). License Grant to CLIx Users: By submitting or
          distributing your User Postings, you hereby grant to each user of the
          Site a non-exclusive license to access and use your User Postings in
          connection with their use of the Site for their own personal purposes.
        </p>
        <strong id="7"> 7. SECURITY </strong>{" "}
        <p>
          CLIx has a policy designed to protect Personal Information in its
          possession or control. This is done through a variety of privacy and
          security policies, processes, and procedures, including
          administrative, physical, and technical safeguards that reasonably and
          appropriately protect the confidentiality, integrity, and availability
          of the Personal Information that it creates, receives, maintains, or
          transmits. Nonetheless, no method of transmission over the Internet,
          or method of electronic storage, is 100% secure; and therefore, CLIx
          cannot guarantee its absolute security.
        </p>
        <strong id="8"> 8. CHANGING OUR PRIVACY POLICY </strong>
        <p>
          Please note that we review and may make changes to this Privacy Policy
          from time to time. When changes are made, the Privacy Policy link will
          include a notation "Revised (date)." indicating that you should review
          the new terms, which will be effective immediately upon posting on
          this page, with an updated effective date. The notation will be
          included in the Privacy Policy link for at least seven (7) days after
          the update has been made. By accessing the Site after any changes have
          been made, you signify your agreement on a prospective basis to the
          modified Privacy Policy and any changes contained therein. In case you
          miss the notification referenced above, be sure to return to this page
          periodically to ensure familiarity with the most current version of
          this Privacy Policy.
        </p>
        <strong id="9"> 9. PRIVACY CONCERNS </strong>
        <p>
          If you have privacy concerns, have disclosed data you would prefer to
          keep private, or would like to access the information we maintain
          about you, please do contact us at{" "}
          <a href="mailto:contact@clix.tiss.edu" targrt="_blank"> contact@clix.tiss.edu </a>
        </p>
        {/* Effective Date: 1st April 2019 */}
        <strong>Effective Date: </strong> 1st April 2019
      </div>
    </div>
  );
}

export default Privacy;
