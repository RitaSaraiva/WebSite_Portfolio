import React from "react";
import { Fragment } from "react";
import classes from "./ContactMe.module.css";
import CharacterLining from "../../src/Assets/estrelas1.png";
import Stars from "../../src/Assets/LiningStar.png";

const ContactMe = () => {
  // const handleEmailClick = () => {
  //   const email = "recipient@example.com"; // Replace with the recipient's email address
  //   const subject = "Hello"; // Optional: Set the email subject
  //   const body = "Hi, I wanted to get in touch with you."; // Optional: Set the email body

  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;

  //   window.location.href = mailtoLink;
  // };

  const openLink = () => {
    const url = "https://linktr.ee/RitzSaraiva"; // Replace with the URL you want to open
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <p className={classes.TitleTextStyle}>Contact me</p>

        <div className={classes.normalTextContainer}>
          <p className={classes.normalTextStyle}>
            Thank you for visiting my portfolio! I'm excited to connect with
            you. Whether you're interested in collaborating on a project, have
            questions about my work, or just want to say hello, I'm always eager
            to hear from you.{" "}
          </p>
        </div>
        <div className={classes.ButtonContainer}>
          <button className={classes.resumeButtonContainer} onClick={openLink}>
            SAY HELLO
          </button>
        </div>
        <img src={Stars} alt="Stars" className={classes.imageSize} />
        <img
          src={CharacterLining}
          alt="Character Lining"
          className={classes.SecondimageSize}
        />
      </div>
    </Fragment>
  );
};

export default ContactMe;
