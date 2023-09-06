import React from 'react';
import { Fragment } from "react";
import classes from './Projects.module.css';
import Phones from '../../src/Assets/Image5 1.png';
import Project from '../../src/Assets/Homepage seen on computer screen.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

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

        <div className={classes.swiperContainer}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
            <SwiperSlide className={classes.swiperContainer}>
                <div className={classes.swiperInfoANDImageContainer}>
                    <div>
                        <p className={classes.swiperTextTitle}>Untitled Project</p>
                        <p className={classes.swiperTextNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec convallis tellus eget magna feugiat scelerisque. 
                            Aliquam ligula turpis, gravida in lacus vitae, tempus dictum 
                            mauris.
                        </p>
                        <div className={classes.swiperSmallTextContainer}>
                            <div className={classes.swiperSmallTextContainerTESTE}>
                                <p className={classes.swiperTextSmall}>React</p>
                            </div>
                            <div className={classes.swiperSmallTextContainerTESTE}>
                                <p className={classes.swiperTextSmall}>React</p>
                            </div>
                            <div className={classes.swiperSmallTextContainerTESTE}>
                                <p className={classes.swiperTextSmall}>React</p>
                            </div>
                            <div className={classes.swiperSmallTextContainerTESTE}>
                                <p className={classes.swiperTextSmall}>React</p>
                            </div>
                        </div>
                    </div>
                    <img src={Project} alt="Project Preview" className={classes.ProejectimageSize}/>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    </Fragment>
  );
};

export default Projects;