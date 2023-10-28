import React from "react";
import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import image from "../../src/Assets/Rectangle 1Image.png";
import image1 from "../../src/Assets/Rectangle2Image.png";
import image2 from "../../src/Assets/Rectangle3Image.png";

const AboutMe = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <h2 className={classes.TitleTextStyle}>About Me</h2>
        </div>
        <div className={classes.normalTextContainer}>
          <p className={classes.normalTextStyle}>
            Hi there! My name is Rita Saraiva and I'm a 22-year-old,
            enthusiastic Junior Front-End Developer and Multimedia Designer. I
            possess strong communication and problem-solving skills, which, when
            combined with my aptitude for collaboration, allow me to excel in
            team-oriented projects. My insatiable curiosity drives me to
            continuously acquire new skills and devise innovative solutions to
            overcome challenges. I also love playing games, traveling and going
            to the gym in my free time.{" "}
          </p>
        </div>
        <div className={classes.imageContainer}>
          <img src={image2} alt="Image1" className={classes.image} />
          <img src={image1} alt="Image2" className={classes.image} />
          <img src={image} alt="Image3" className={classes.image} />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
