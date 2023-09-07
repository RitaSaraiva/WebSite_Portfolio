import React from 'react';
import { Fragment } from "react";
import classes from './ContactMe.module.css';
import RoundCharacter from '../../src/Assets/Image1.png';

const ContactMe = () => {
  const handleEmailClick = () => {
    const email = 'recipient@example.com'; // Replace with the recipient's email address
    const subject = 'Hello'; // Optional: Set the email subject
    const body = 'Hi, I wanted to get in touch with you.'; // Optional: Set the email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
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
            <div className={classes.ButtonContainer}>
              <button className={classes.resumeButtonContainer} onClick={handleEmailClick}>SAY HELLO</button>
            </div>
            <img src={RoundCharacter} alt="Character whistling" className={classes.imageSize}/>
            <img src={RoundCharacter} alt="Character whistling" className={classes.SecondimageSize}/>
        </div>
    </Fragment>
  );
};

export default ContactMe;