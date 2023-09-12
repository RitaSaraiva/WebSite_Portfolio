import React, { useRef } from 'react';
import classes from './App.module.css';
// import Header from './components/Header';
import Intro from './components/Intro';
import TaskBar from './components/TaskBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import RoundCharacter from './Assets/Image4 1.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {

  const ref = useRef();

  return (
    <div>
      <div style={{ width: '100%', height: '100%', background: 'BLUE' }}>
        <Parallax pages={5} ref={ref} >
          <ParallaxLayer offset={0} speed={0.02} factor={2}>
            <div className={classes.Intro}><Intro onClick={() => ref.current.scrollTo(1)}/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.05} factor={3}>
            <div className={classes.aboutMeContainer}><AboutMe/></div>
          </ParallaxLayer>
          

          <ParallaxLayer offset={2} speed={0.05} factor={3}>
            <div className={classes.aboutMeContainer}><Experience/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.05} factor={3}>
            <div className={classes.ExpericeContainer}><Projects/></div>
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.05} factor={3}>
            <div className={classes.aboutMeContainer}><ContactMe/></div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1.55, end: 1.7 }}
            setHeight={336}
            style={{height: 336, zIndex: 1}}
          >
            <div className={classes.imageContainer}>
              <img src={RoundCharacter} alt="Character whistling" className={classes.imageSize}/>
            </div>
          </ParallaxLayer>

        </Parallax>

        <div>
          <TaskBar className={classes.taskBarContainer} 
            onClickHome={() => ref.current.scrollTo(0)}
            onClickAbout={() => ref.current.scrollTo(1)}
            onClickExperience={() => ref.current.scrollTo(2)}
            onClickProjects={() => ref.current.scrollTo(3)}
            onClickContact={() => ref.current.scrollTo(4)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
