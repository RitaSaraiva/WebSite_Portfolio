import { Fragment } from "react";
import React from "react";
import SmilingStar from "../../src/Assets/SmilingStar.png";
import arrowIcon from "../../src/Assets/icon_chevroncircledownalt_.png";
import classes from "./Intro.module.css";
import "./Font.css";

const Intro = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <p className={classes.TitletextStyle}>Hello World!</p>
          <p className={classes.normalTextStyle}>
            My name is{" "}
            <span className={classes.normalTextStyleBold}>Rita Saraiva</span>{" "}
            and I'm a Junior Frontend Developer and a Multimedia Designer
          </p>
        </div>
        <img
          src={SmilingStar}
          alt="SmilingStar"
          className={classes.imageSize}
        />
      </div>
      <div className={classes.arrowIconContainer}>
        <img
          src={arrowIcon}
          alt="arrow Icon"
          className={classes.arrowIcon}
          onClick={props.onClick}
        />
      </div>
    </Fragment>
  );
};

export default Intro;
