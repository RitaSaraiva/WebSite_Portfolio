import { Fragment } from "react";
import React from 'react';
import RoundCharacter from '../../src/Assets/Image1.png';
import arrowIcon from '../../src/Assets/🦆 icon _chevron circle down alt_.png';
import classes from './Intro.module.css';
import './Font.css';

const Intro = () => {

    return (
    <Fragment>
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <p className={classes.TitletextStyle}>Hello World!</p> 
                <p className={classes.normalTextStyle}>My name is <span className={classes.normalTextStyleBold}>Rita Saraiva</span> and I'm a AR/VR Developer, 
                Frontend Developer and a Multimedia Designer</p>
            </div>
            <img src={RoundCharacter} alt="Character whistling" className={classes.imageSize}/> 
        </div>
        <div className={classes.arrowIconContainer}>
            <img src={arrowIcon} alt="arrow Icon" className={classes.arrowIcon}/> 
        </div>
    </Fragment>
    );
};
  
export default Intro;
