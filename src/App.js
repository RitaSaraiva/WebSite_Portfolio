import React, { Fragment } from 'react';
import classes from './App.module.css';
import Header from './components/Header';
import Intro from './components/Intro';
import TaskBar from './components/TaskBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';

const App = () => {

  return (
    <Fragment>
      <div>
        <TaskBar className={classes.taskBarContainer}/>
      </div>
    
      {/* <div>
        <Header/>
      </div> */}

      <div className={classes.Intro}>
        <Intro />
      </div>

      <div className={classes.aboutMeContainer}>
        <AboutMe/>
      </div>

      <div className={classes.ExpericeContainer}>
        <Experience/>
      </div>

      <div className={classes.ExpericeContainer}>
        <ContactMe/>
      </div>
    </Fragment>
  );
};

export default App;
