import React from "react";
import { Fragment } from "react";
import classes from "./Carossel.module.css";

const Carossel = ({ title, description, workplace }) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div>
          <p className={classes.normalTextBoldStyle}>{title}</p>
        </div>
        <div>
          <p className={classes.normalInfoTextStyle}>{workplace}</p>
        </div>
        <div>
          <p className={classes.normalTextStyle}>{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Carossel;
