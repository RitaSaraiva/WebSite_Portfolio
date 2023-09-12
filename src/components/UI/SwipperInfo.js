import React from 'react';
import { Fragment } from "react";
import classes from './SwipperInfo.module.css';


const SwipperInfo = (props) => {

  return (
    <Fragment>
        <div className={classes.swiperInfoANDImageContainer}>
            <div>
                <p className={classes.swiperTextTitle}>{props.ProjecTitle}</p>
                <p className={classes.swiperTextNormal}>{props.ProjectDescription}</p>
                <div className={classes.swiperSmallTextContainer}>
                    {
                        props.Skills.map((item, index) => (<div key={index} className={classes.swiperSmallTextContainerTESTE}>
                        <p className={classes.swiperTextSmall}>{item}</p>
                    </div>))
                    }
                </div>
            </div>
            <img src={props.ImageName} alt="Project Preview" className={classes.ProejectimageSize}/>
        </div>
    </Fragment>
  );
};

export default SwipperInfo;