import React from "react";
import { Fragment } from "react";
import classes from "./Projects.module.css";
import Phones from "../../src/Assets/Image5 1.png";
import SibsAppIMG from "../../src/Assets/Sibsapp.png";
import Swipper from "./UI/Swipper";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes.Allcontainer}>
        <div className={classes.container}>
          <div className={classes.TextContainer}>
            <h2 className={classes.TitleTextStyle}>Projects</h2>
            <div className={classes.FeaturedTextStyle}>
              <div className={classes.TextContainer}>
                <p className={classes.FeaturedTextStyleTitleTITLE}>
                  Featured Project
                </p>
                <p className={classes.FeaturedTextStyleTitle}>
                  SIBS Backoffice App
                </p>
              </div>
              <div className={classes.TextInfoContainer}>
                <p className={classes.FeaturedTextSmallStyleTitle}>
                  The SIBS Backoffice, after a secure login, allows users to use
                  a built-in scanner that simplifies the process of capturing QR
                  and Bar codes, providing instant access to detailed purchase
                  information. The app offers a straightforward approach to
                  confirming purchases, viewing already confirmed transactions
                  and returns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={SibsAppIMG}
          alt="Project Preview"
          className={classes.imageSize}
        />
      </div>

      <Swipper />
    </Fragment>
  );
};

export default Projects;
