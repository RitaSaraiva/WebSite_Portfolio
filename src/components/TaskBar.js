import React, { useState } from 'react';
import classes from './TaskBar.module.css';
import Logo from '../../src/Assets/Logo.png';


const TaskBar = (props) => {

  const openPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/CV_RitaSaraiva.pdf';

    window.open(pdfUrl, '_blank');
  };

  return (
    <div className={classes.IDK}>
      <div className={classes.container}>
        <div className={classes.coisa}>
          <img  src={Logo} alt="Logo" className={classes.ImagimeStyle}/>
          <div className={classes.taskOptionsContainer}>
            <ul className={classes.buttonsContainer}>
                <li className={classes.buttonStyle} onClick={props.onClickHome}>Home</li>
                <li className={classes.buttonStyle} onClick={props.onClickAbout}>About</li>
                <li className={classes.buttonStyle} onClick={props.onClickExperience}>Experience</li>
                <li className={classes.buttonStyle} onClick={props.onClickProjects}>Projects</li>
                <li className={classes.buttonStyle} onClick={props.onClickContact}>Contact</li>
            </ul>
          </div>
          <button className={classes.resumeButtonContainer} onClick={openPdf}>RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;