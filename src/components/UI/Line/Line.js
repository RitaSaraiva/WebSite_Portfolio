import React from 'react';
import classes from './Line.module.css';

const Line = ({ lineWidth }) => {
    return (
      <div className={classes.line} style={{ width: `${lineWidth}px` }}></div>
    );
  };
  
  export default Line;