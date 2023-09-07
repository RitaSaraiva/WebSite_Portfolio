import React, { Fragment, useRef } from 'react';
import classes from './App.module.css';
// import Header from './components/Header';
import Intro from './components/Intro';
import TaskBar from './components/TaskBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import RoundCharacter from './Assets/Image1.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {

  const ref = useRef();

  return (
    <div>
      <div>
          <TaskBar className={classes.taskBarContainer}/>
      </div>
    
      <div>
        <Parallax pages={6} ref={ref}>
          <ParallaxLayer offset={0} speed={0.02}>
            <div className={classes.Intro}><Intro/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2}>
            <div><AboutMe/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.2}>
            <div><Experience/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.2}>
            <div><Projects/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.2}>
            <div><Experience/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.2}>
            <div><ContactMe/></div>
          </ParallaxLayer>
        </Parallax>

        {/* <div className={classes.Intro}>
          <Intro />
        </div>

        <div className={classes.aboutMeContainer}>
          <AboutMe/>
        </div>

        <div className={classes.ExpericeContainer}>
          <Experience/>
        </div>

        <div>
          <Projects/>
        </div>

        <div className={classes.ExpericeContainer}>
          <ContactMe/> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
