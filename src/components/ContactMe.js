import React from 'react';
import { Fragment, useState } from "react";
import classes from './ContactMe.module.css';

const ContactMe = () => {

  return (
    <Fragment>
        <div className={classes.container}>
          <p className={classes.TitleTextStyle}>Contact me</p>

            <div className={classes.normalTextContainer}>
                <p className={classes.normalTextStyle}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Donec convallis tellus eget magna 
                feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, 
                tempus dictum mauris. Duis id porttitor ante. Quisque mollis, 
                lorem nec vehicula consequat, nulla diam lobortis dui, eget porta 
                lorem nunc ac mi. </p>
            </div>
            <button className={classes.resumeButtonContainer}>SAY HELLO</button>
        </div>

        
    </Fragment>
  );
};

export default ContactMe;