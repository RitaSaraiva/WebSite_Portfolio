import React from 'react';
import { Fragment } from "react";
import classes from './Projects.module.css';
import Phones from '../../src/Assets/Image5 1.png';
import Swipper from './UI/Swipper';

const Projects = () => {

  return (
    <Fragment>
        <div className={classes.Allcontainer}>
            <div className={classes.container}>
                <div className={classes.TextContainer}>
                    <h2 className={classes.TitleTextStyle}>Projects</h2>
                    <div className={classes.FeaturedTextStyle}>
                        <div className={classes.TextContainer}>
                            <p className={classes.FeaturedTextStyleTitleTITLE}>Featured Project</p>
                            <p className={classes.FeaturedTextStyleTitle}>Untitled Project</p>
                        </div>
                        <div className={classes.TextInfoContainer}>
                            <p className={classes.FeaturedTextSmallStyleTitle}>Lorem ipsum dolor sit 
                            amet, consectetur adipiscing elit. Donec convallis tellus eget 
                            magna feugiat scelerisque. Aliquam ligula turpis, gravida in 
                            lacus vitae, tempus dictum mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Phones} alt="Project Preview" className={classes.imageSize}/>
        </div>

        <Swipper/>
    </Fragment>
  );
};

export default Projects;