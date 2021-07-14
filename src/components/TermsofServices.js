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

export default function TermsofServices() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="container">
        <Helmet>
          <title> CLIx Dashboard Terms of Privacy </title>
        </Helmet>

        <div className="container text-justify">
          <h2>Terms of Service </h2>
          <p>
            These are the general terms and conditions on which we supply all
            our services. If you use our services, you agree to abide by these
            terms which come into effect on the 1st April 2019.
          </p>{" "}
          <p>
            Please read these Terms of Service ("ToS") and the Privacy Policy
            and Honour Code prior to registering for CLIxDashboard or using any
            portion of the CLIxDashboard website (the "Site," which consists of
            all content and pages located within the
            clixdashboard[dot]tiss[dot]edu web domain), including accessing any
            datasets, visualizations, or other electronic services. These ToS,
            the Privacy Policy and the Honour Code are agreements (the
            "Agreements") between you and CLIx. By using the Site, you accept
            and agree to be legally bound by the Agreements, whether or not you
            are a registered user. If you do not understand or do not wish to be
            bound by the terms of the Agreements, you should not use the Site.
            CLIx reserves the right to modify these ToS at any time without
            advance notice. Any changes to these ToS will be effective
            immediately upon posting on this page, with an updated effective
            date. By accessing the Site after any changes have been made, you
            signify your agreement on a prospective basis to the modified ToS
            and all of the changes. Be sure to return to this page periodically
            to ensure familiarity with the most current version of these ToS.
          </p>
          <p>
            In this document, CLIx and CLIxDashboard are used interchangeably,
            as CLIx is the parent entity that holds the CLIxDashboard.
          </p>
          <strong>
            <a href="#1"> 1. DESCRIPTION OF CLIxDashboard SCOPE </a> <br />
            <a href="#2">2. RULES FOR ONLINE CONDUCT </a> <br />
            <a href="#3">
              3. LIST OF ITEMS STRICTLY PROHIBITED ON THE SITE{" "}
            </a>{" "}
            <br />
            <a href="#4">4. USER ACCOUNTS AND AUTHORITY </a> <br />
            <a href="#5"> 5. YOUR RIGHT TO USE CONTENT ON THE SITE </a> <br />
            <a href="#6">6. USER POSTINGS </a> <br />
            <a href="#7"> 7. TRADEMARKS </a> <br />
            <a href="#8"> 8. COPYRIGHT ACT </a> <br />
            <a href="#9">
              {" "}
              9. DISCLAIMERS OF WARRANTY / LIMITATIONS OF LIABILITIES{" "}
            </a>{" "}
            <br />
            <a href="#10"> 10. INDEMNIFICATION </a> <br />
            <a href="#12"> 11. MISCELLANEOUS </a> <br />
            <a href="#13">12. CLIx HONOUR CODE PLEDGE </a> <br />
          </strong>
          <br />
          <strong id="1"> 1. DESCRIPTION OF CLIxDashboard SCOPE </strong>
          <br />
          <p>
            CLIxDashboard provides CLIx implementation monitoring metrics and
            learning analytics across our partner schools through school
            dashboard and data visualizations. It also includes CLIx data
            documentation.
          </p>
          <strong id="2"> 2. RULES FOR ONLINE CONDUCT </strong>
          <p>
            You agree that you are responsible for your own use of the Site and
            for your User Postings. "User Postings" include all content
            submitted, posted, published or distributed on the Site by you or
            other users of the Site, including but not limited to all forum
            posts, wiki edits, notes, questions, comments, videos and file
            uploads. You agree that you will use the Site in compliance with
            these ToS, the Honour Code and all applicable local, state, and
            national laws, rules and regulations, including copyright laws, any
            laws regarding the transmission of data under{" "}
            <a
              href="https://www.meity.gov.in/content/information-technology-act"
              target="_blank"
            >
              Information Technology
            </a>
            Act, 2000 and as amended later.
            <br /> As a condition of your use of the CLIx services, you will not
            use the Site in any manner intended to damage, disable, overburden
            or impair any CLIx server or the network(s) connected to any CLIx
            server or to interfere with any other party's use and enjoyment of
            the Site. You may not attempt to gain unauthorized access to the
            Site, other accounts, computer systems or networks connected to any
            CLIx server through hacking, password mining or any other means. You
            may not obtain or attempt to obtain any materials or information
            stored on the Site, its servers or associated computers through any
            means not intentionally made available through the Site.
          </p>
          <strong id="3">
            {" "}
            3. THE FOLLOWING IS THE LIST OF ITEMS STRICTLY PROHIBITED ON THE
            SITE:{" "}
          </strong>
          <ul className="">
            <li>Content that defames, harasses or threatens others; </li>
            <li>
              Content that discusses illegal activities with the intent to
              commit them;{" "}
            </li>
            <li>
              {" "}
              Content that infringes another's intellectual property, including,
              but not limited to, copyrights or trademarks;
            </li>{" "}
            <li>
              {" "}
              Profane, pornographic, obscene, indecent or unlawful content;
            </li>{" "}
            <li>
              {" "}
              Content that defames, harasses or threatens any citizen on grounds
              of religion, race, caste, sex, place of birth or any of them.;{" "}
            </li>
            <li> Advertising or any form of commercial solicitation; </li>
            <li> Content related to partisan political activities; </li>
            <li>
              {" "}
              Viruses, Trojan horses, worms, time bombs, corrupted files,
              malware, spyware or any other similar software that may damage the
              operation of another's computer or property; and{" "}
            </li>
            <li>
              {" "}
              Content that contains intentionally inaccurate information or that
              is posted with the intent of misleading others.{" "}
            </li>{" "}
            <br />
          </ul>
          Furthermore, you agree not to scrape, or otherwise download in bulk,
          any Site content, including but not limited to a list or directory of
          users on the system, online textbooks, User Postings or user
          information. You agree not to misrepresent or attempt to misrepresent
          your identity while using the Site (although you are welcome and
          encouraged to use an anonymous username in the forums and to act in a
          manner that keeps your identity concealed).
          <br />
          <br />
          <strong id="4"> 4. USER ACCOUNTS AND AUTHORITY </strong>
          <p>
            In order to participate fully in Site activities, you may have to
            provide your name, an email address and a user password in order to
            create a user account ("User Account"). You agree that you will
            never divulge or share access or access information for your User
            Account with any third party for any reason. In setting up your User
            Account, you may be prompted to enter additional optional
            information (e.g., your address, etc.). You represent that all
            information provided by you is accurate and current. You agree to
            maintain and update your information to keep it accurate and
            current. We care about the confidentiality and security of your
            personal information. Please see our Privacy Policy for more
            information about what information about you CLIx collects and how
            CLIx uses that information.
          </p>
          <strong id="5">5. YOUR RIGHT TO USE CONTENT ON THE SITE </strong>{" "}
          <p>
            Unless indicated as being in the public domain, the content on the
            Site is protected by the{" "}
            <a
              href="https://copyright.gov.in/Copyright_Act_1957/index.html"
              target="_blank"
            >
              Copyright Act 1957{" "}
            </a>{" "}
            as amended from time to time by the Government of India. Unless
            otherwise expressly stated on the Site, the texts, visuals, datasets
            and other educational materials provided on this Site are for your
            personal use in connection with CLIx programme only.
          </p>
          <p>
            Visualizations and text: All the data visualization charts, maps,
            and text produced by CLIxDashboard are licensed under a under a  <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
            >
              
                  Creative Commons Attribution 4.0 International license.{" "}
            </a>{" "}
            The CC-BY license.{" "}
          </p>
          <p>
            This means you are free to take whatever is useful for your work.
            You just need to provide credit to CLIxDashboard and our underlying
            sources and conditions.
          </p>
          <p>
            Datasets: While at CLIx we aspire to provide anonymised datasets for
            educational and research purposes, these yet to be released with an
            appropriate open license. Please contact us at email{" "}
            <a href="mailto:contact@clix.tiss.edu" target="_blank"> contact@clix.tiss.edu </a>if
            you would like to pursue the matter.
          </p>
          <p>
            Certain code libraries and tools used on the Site are used with the
            permission of third parties, and use of that information is subject
            to certain rules and conditions, which will be posted along with the
            information. By using this Site, you agree to abide by all such
            rules and conditions. You agree to retain all copyrights and other
            notices on any content you obtain from the Site. All rights in the
            Site and its content, if not expressly granted, are reserved.
          </p>
          <strong id="6"> 6. USER POSTINGS </strong>
          <p>
            User Postings Representations and Warranties: By submitting or
            distributing your User Postings, you affirm, represent and warrant
            (1) that you have the necessary rights, licenses, consents and/or
            permissions to reproduce and publish the User Postings and to
            authorize CLIx and its users to reproduce, modify, publish and
            otherwise use and distribute your User Postings in a manner
            consistent with the licenses granted by you below, and (2) that
            neither your submission of your User Postings nor the exercise of
            the licenses granted below will infringe or violate the rights of
            any third party. You, and not CLIx, are solely responsible for your
            User Postings and the consequences of posting or publishing them.
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
            hereafter developed).
            <br /> License Grant to CLIx Users: By submitting or distributing
            your User Postings, you hereby grant to each user of the Site a
            non-exclusive license to access and use your User Postings in
            connection with their use of the Site for their own personal
            purposes.
          </p>
          <strong id="7"> 7. TRADEMARKS </strong>{" "}
          <p>
            Usage of Trademark, Service mark and logo of CLIx, Tata Trusts, Tata
            Institute of Social Sciences and Massachusetts Institute of
            Technology: The names, logos and seals of CLIx Tata Trusts, Tata
            Institute of Social Sciences and Massachusetts Institute of
            Technology, are trademarks ("Trademarks") of the respective entities
            and are owned by the respective entities. You may not use any of
            these Trademarks, or any variations thereof, without the owner's
            prior written consent. You may not use any of these Trademarks, or
            any variations thereof, for promotional purposes, or in any way that
            deliberately or inadvertently claims, suggests or, in these
            institutions' sole judgment, gives the appearance or impression of a
            relationship with or endorsement by these institutions. All
            Trademarks not owned by CLIx that appear on the Site or on, or
            through the services made available on or through the Site, if any,
            are the property of their respective owners.
            <br /> Nothing contained on the Site should be construed as
            granting, by implication, estoppel or otherwise, any license or
            right to use any Trademark displayed on the Site without the written
            permission of the owner of the applicable Trademark.
          </p>
          <strong id="8"> 8. COPYRIGHT ACT </strong>
          <p>
            {" "}
            Copyright owners who believe their material has been infringed on
            the Site should contact the CLIx Team at Tata Institute of Social
            Sciences, Mumbai through email{" "}
            <a href="mailto:contact@clix.tiss.edu" target="_blank"> contact@clix.tiss.edu </a>
            Notification must include:
            <br /> • Identification of the copyrighted work, or, in the case of
            multiple works at the same location, a representative list of such
            works at that site. <br /> • On identification of the material that
            is claimed to be infringing or to be the subject of infringing
            activity, you must include sufficient information for us to locate
            the material. (eg.URL, IP address, computer name) <br /> •
            Information for us to be able to contact the complaining party (eg.
            email address, phone number). <br /> • A statement that the
            complaining party believes that the use of the material has not been
            authorized by the copyright owner or an Authorized agent. <br /> • A
            statement that the information in the notification is accurate and
            that the complaining party is authorized to act on behalf of the
            copyright owner.
          </p>
          <strong id="9">
            {" "}
            9. DISCLAIMERS OF WARRANTY / LIMITATIONS OF LIABILITIES{" "}
          </strong>
          <p>
            THE SITE AND ANY INFORMATION, CONTENT OR SERVICES MADE AVAILABLE ON
            OR THROUGH THE SITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
            WARRANTY OF ANY KIND (EXPRESS, IMPLIED OR OTHERWISE), INCLUDING,
            WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT, EXCEPT
            INSOFAR AS ANY SUCH IMPLIED WARRANTIES MAY NOT BE DISCLAIMED UNDER
            APPLICABLE LAW. CLIx DOES NOT WARRANT THAT THE SITE WILL OPERATE IN
            AN UNINTERRUPTED OR ERROR-FREE MANNER, THAT THE SITE IS FREE OF
            VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE COURSES OR CONTENT
            PROVIDED WILL MEET YOUR NEEDS OR EXPECTATIONS. CLIx ALSO MAKES NO
            WARRANTY ABOUT THE ACCURACY, COMPLETENESS, TIMELINESS, OR QUALITY OF
            THE SITE OR ANY COURSES OR CONTENT, OR THAT ANY PARTICULAR COURSE OR
            CONTENT WILL CONTINUE TO BE MADE AVAILABLE. USE OF THE SITE, AND THE
            CONTENT AND SERVICES OBTAINED FROM OR THROUGH THE SITE, IS AT YOUR
            OWN RISK. YOUR ACCESS TO OR DOWNLOAD OF INFORMATION, MATERIALS OR
            DATA THROUGH THE SITE OR ANY REFERENCE SITES IS AT YOUR OWN
            DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
            DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM) OR LOSS OF
            DATA THAT RESULTS FROM THE DOWNLOAD OR USE OF SUCH MATERIAL OR DATA,
            UNLESS OTHERWISE EXPRESSLY PROVIDED FOR IN THE CLIxPlatform PRIVACY
            POLICY. <br /> <br/>
            User Postings Disclaimer: You understand that when using the Site
            you will be exposed to User Postings from a variety of sources and
            that CLIx is not responsible for the accuracy, usefulness,
            reliability or intellectual property rights of or relating to such
            User Postings. You further understand and acknowledge that you may
            be exposed to User Postings that are inaccurate, offensive,
            defamatory, indecent or objectionable and you agree to waive, and
            hereby do waive, any legal or equitable rights or remedies you have
            or may have against CLIx, with respect thereto. CLIx does not
            endorse any User Postings or any opinion, recommendation or advice
            expressed therein. CLIx does not have any obligation to monitor any
            User Postings or any other user communications through the Site.{" "}
            <br />
            However, CLIx reserves the right to review User Postings and to
            exercise its sole discretion to edit or remove, in whole or in part,
            any User Posting at any time and for any reason. Without limiting
            the foregoing, upon receiving notice from a user or a content owner
            that a User Posting allegedly does not conform to these ToS, CLIx
            may investigate the allegation and determine in its sole discretion
            whether to remove the User Posting, which it reserves the right to
            do at any time and without notice as per the law.
          <br/>  <strong>Links to Other Sites </strong>: The Site may include
            hyperlinks to sites maintained or controlled by others. CLIx is not
            responsible for and does not routinely screen, approve, review or
            endorse the contents of or use of any of the products or services
            that may be offered at these sites. If you decide to access linked
            third-party websites, you do so at your own risk. <br /> TO THE
            FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT CLIx WILL
            NOT BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES, EITHER ACTUAL OR
            CONSEQUENTIAL, ARISING OUT OF OR RELATING TO THESE TERMS OF SERVICE,
            OR YOUR (OR ANY THIRD PARTY'S) USE OF OR INABILITY TO USE THE SITE,
            OR YOUR PLACEMENT OF CONTENT ON THE SITE, OR YOUR RELIANCE UPON
            INFORMATION OBTAINED FROM OR THROUGH THE SITE, WHETHER YOUR CLAIM IS
            BASED IN CONTRACT, TORT, STATUTORY OR OTHER LAW. IN PARTICULAR, TO
            THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, CLIx WILL NOT HAVE
            ANY LIABILITY FOR ANY CONSEQUENTIAL, INDIRECT, PUNITIVE, SPECIAL,
            EXEMPLARY OR INCIDENTAL DAMAGES, WHETHER FORESEEABLE OR
            UNFORESEEABLE AND WHETHER OR NOT CLIx HAS BEEN NEGLIGENT OR
            OTHERWISE AT FAULT (INCLUDING, BUT NOT LIMITED TO, CLAIMS FOR
            DEFAMATION, ERRORS, LOSS OF PROFITS, LOSS OF DATA OR INTERRUPTION IN
            AVAILABILITY OF DATA).
            <br /> THE LAW OF THE REPUBLIC OF INDIA WILL APPLY.
          </p>
          <strong id="10"> 10. INDEMNIFICATION </strong>
          <p>
            You agree to defend, hold harmless and indemnify CLIx and its
            respective subsidiaries, affiliates, officers, faculty, students,
            fellows, governing board members, agents and employees from and
            against any third-party claims, actions or demands arising out of,
            resulting from or in any way related to your use of the Site,
            including any liability or expense arising from any and all claims,
            losses, damages (actual and consequential), suits, judgments,
            litigation costs and attorneys' fees, of every kind and nature. In
            such a case, CLIx will provide you with written notice of such
            claim, suit or action.
          </p>
          <strong id="12">11. MISCELLANEOUS </strong>
          <p>
            Termination Rights; discontinuation of services: You agree that
            CLIx, in its sole discretion, may terminate your use of the Site or
            your participation in it, for any reason or no reason, upon notice
            to you. It is CLIx's policy to terminate in appropriate
            circumstances users of the Site who are repeat copyright infringers.
            CLIx reserves the right at any time in their sole discretion to
            cancel, delay, reschedule or alter the format of any course offered
            through CLIx, or to cease providing any part or all of the Site
            content or related services, and you agree that CLIx will not have
            any liability to you for such an action. If you no longer desire to
            participate in the Site, you may terminate your participation at any
            time. The rights granted to you hereunder will terminate upon any
            termination of your right to use the Site, but the other provisions
            of these ToS will survive any such termination. 
            <br /> <br/> Entire
            Agreement: These ToS and the Honour Code (this document), and the
            Privacy Policy together constitute the entire agreement between you
            and CLIx, with respect to your use of the Site, superseding any
            prior agreements between you and CLIx regarding your use of the
            Site.
            <br /> <br/> Waiver and Severability of ToS: The failure of CLIx to
            exercise or enforce any right or provision of these ToS shall not
            constitute a waiver of such right or provision. If any provision of
            these ToS is found by a court of competent jurisdiction to be
            invalid, the parties nevertheless agree that the court should
            endeavour to give effect to the parties' intentions as reflected in
            the provision and the other provisions of these ToS shall remain in
            full force and effect. <br />  <br/> Choice of Law/Forum Selection: You
            agree that these ToS and any claim or dispute arising out of or
            relating to these ToS or any content or service obtained from or
            through the Site will be governed by the laws of the Republic of
            India. You agree that all such claims and disputes will be heard and
            resolved exclusively in the High Court of Bombay. You consent to the
            personal jurisdiction of those courts over you for this purpose, and
            you waive and agree not to assert any objection to such proceedings
            in those courts (including any defence or objection of lack of
            proper jurisdiction or venue or inconvenience of forum).
            <br /> Effective Date: 1st April 2019
          </p>
          <strong id="13">12. CLIx Honour Code Pledge </strong>
          <p>
            <strong>COLLABORATION POLICY </strong>
            <br /> By registering on CLIxDashboard, you are joining a special
            nationwide community of learners. The aspiration of CLIx is to
            provide anyone in the country who has the motivation and ability to
            engage coursework from one of the top institutions and provides an
            opportunity to attain the best educational experience that internet
            technology enables. You are part of the community which will help
            CLIx achieve this goal. <br />
            CLIx depends upon your motivation to learn the material and to do so
            with honesty. In order to participate in CLIx, you must agree to the
            Honour Code below and any additional terms specific to a class. This
            Honour Code, and any additional terms, will be posted on each class
            website. CLIx HONOUR CODE PLEDGE By registering on CLIxDashboard, I
            agree that I will: <br />
            • Use the content only for non-commercial purposes for my own
            learning. I will not submit the work of any other person. <br /> •
            Maintain only one user account and not let anyone else use my
            username and/or password. <br /> • Not engage in any activity that
            would dishonestly manipulate data to improve my results, or improve
            or hurt the results of others. <br />
            <strong> CHANGING THE HONOUR CODE </strong>
            <br /> Please note that we review and may make changes to this
            Honour Code from time to time. Any changes to this Honour Code will
            be effective immediately upon posting on this page, with an updated
            effective date. By accessing the Site after any changes have been
            made, you signify your agreement on a prospective basis to the
            modified Honour Code and any changes contained therein. Be sure to
            return to this page periodically to ensure familiarity with the most
            current version of this Honour Code.
            <br />
            <strong>Effective Date: </strong> 1st April 2019
          </p>
        </div>
      </div>
    </div>
  );
}
