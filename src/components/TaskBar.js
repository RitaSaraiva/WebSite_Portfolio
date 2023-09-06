import React, { Fragment } from 'react';
import classes from './TaskBar.module.css';
import Logo from '../../src/Assets/Logo.png';

const TaskBar = () => {

  return (
    <div className={classes.IDK}>
      <div className={classes.container}>
        <div className={classes.coisa}>
          <img  src={Logo} alt="Logo" className={classes.ImagimeStyle}/>
          <div className={classes.taskOptionsContainer}>
            <ul className={classes.buttonsContainer}>
                <li className={classes.buttonStyle}>Home</li>
                <li className={classes.buttonStyle}>About</li>
                <li className={classes.buttonStyle}>Experience</li>
                <li className={classes.buttonStyle}>Projects</li>
                <li className={classes.buttonStyle}>Contact</li>
            </ul>
          </div>
          <button className={classes.resumeButtonContainer}>RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;