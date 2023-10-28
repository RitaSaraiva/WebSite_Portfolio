import React from "react";
import { Fragment } from "react";
import classes from "./Experience.module.css";
import Carossel from "./Carossel";
// import image from '../../src/Assets/Rectangle 1.png';

const Experience = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <h2 className={classes.TitleTextStyle}>Experience</h2>
        </div>
        <div className={classes.CarosselContainer}>
          <div
            className={classes.CarosselQuaseContainer}
            style={{ width: 505 * 5 }}
          >
            <Carossel
              title={"Front-End Developer"}
              workplace={"Cycloid by Innowave - Nov 2022 - Present"}
              description={
                "Develop responsive web interfaces and mobile apps with React and React Native, focusing on user-friendly design and seamless performance."
              }
            />
            <Carossel
              title={"AR/VR Developer"}
              workplace={"Cycloid by Innowave - Oct 2021 - Aug 2022"}
              description={
                "Collaborated on AR/VR projects, creates custom interactions and UI elements using Unity/Unreal, and integrates 3D assets for immersive experiences."
              }
            />
            <Carossel
              title={"Freelance"}
              workplace={"Selfemployed - June 2021 - Present"}
              description={
                "Creating 3D models and developing video games while also adept at motion design, including openers and informative videos."
              }
            />
            <Carossel
              title={"AR Developer"}
              workplace={"Splink - October 2021 - November 2021"}
              description={
                "Contributed to AR experiences for football fans, including creating hyper-realistic 3D models, AR assets, filters, and social media content."
              }
            />
            <Carossel
              title={"Multimedia Designer"}
              workplace={"LPM Comunicações - June 2021 - September2021"}
              description={
                "Worked on audiovisual content, including podcast/event openers, 3D modeling, video editing, and character animation."
              }
            />
          </div>
        </div>
        <div className={classes.allSkillsContainer}>
          <h3 className={classes.SmallTitleTextStyle}>Skills & Softwares</h3>
        </div>
        <div className={classes.skillsContainer}>
          <p className={classes.SmallTextStyle}>3D Modeling</p>
          <p className={classes.SmallTextStyle}>React</p>
          <p className={classes.SmallTextStyle}>Photoshop</p>
          <p className={classes.SmallTextStyle}>After Effects</p>
        </div>

        <div className={classes.LowerskillsContainer}>
          <p className={classes.SmallTextStyle}>Unity</p>
          <p className={classes.SmallTextStyle}>Unreal</p>
          <p className={classes.SmallTextStyle}>HTML & CSS</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
