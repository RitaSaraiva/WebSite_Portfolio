import React from 'react';
import { Fragment } from "react";
import classes from './Carossel.module.css';

const Carossel = () => {

  return (
    <Fragment>
        <div className={classes.container}>
          <div>
            <p className={classes.normalTextBoldStyle}>Lorem ipsum</p>
          </div>
          <div>
            <p className={classes.normalTextStyle}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Donec convallis tellus eget magna feugiat 
            scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus 
            dictum mauris.</p>
          </div>
        </div>
    </Fragment>
  );
};

export default Carossel;