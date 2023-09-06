import React from 'react';
import { Fragment } from "react";
import classes from './AboutMe.module.css';
import image from '../../src/Assets/Rectangle 1.png';

const AboutMe = () => {

  return (
    <Fragment>
        <div className={classes.container}>
            <div >
                <h2 className={classes.TitleTextStyle}>About Me</h2>
            </div>
            <div className={classes.normalTextContainer}>
                <p className={classes.normalTextStyle}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Donec convallis tellus eget magna 
                feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, 
                tempus dictum mauris. Duis id porttitor ante. Quisque mollis, 
                lorem nec vehicula consequat, nulla diam lobortis dui, eget porta 
                lorem nunc ac mi. </p>
            </div>
            <div className={classes.imageContainer}>
                <img src={image} alt="Image1" className={classes.image}/> 
                <img src={image} alt="Image2" className={classes.image}/> 
                <img src={image} alt="Image3" className={classes.image}/> 
            </div>
        </div>
    </Fragment>
  );
};

export default AboutMe;