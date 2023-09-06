import React from 'react';
import { Fragment, useState } from "react";
import classes from './Experience.module.css';
import Carossel from './Carossel';
// import image from '../../src/Assets/Rectangle 1.png';

const Experience = () => {

  return (
    <Fragment>
        <div className={classes.container}>
          <div>
            <h2 className={classes.TitleTextStyle}>Experience</h2>
          </div>
          <div className={classes.CarosselContainer}>
            <div className={classes.CarosselQuaseContainer} style={{width: 505 *5 }}>
            <Carossel/>
            <Carossel/>
            <Carossel/>
            <Carossel/>
            <Carossel/>
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