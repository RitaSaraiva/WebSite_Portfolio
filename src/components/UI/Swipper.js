import React from 'react';
import { Fragment } from "react";
import classes from './Swipper.module.css';
import Project from '../../Assets/Homepage seen on computer screen.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import SwipperInfo from './SwipperInfo';
// register Swiper custom elements
register();

const Swipper = () => {

  return (
    <Fragment>
        <div className={classes.swiperContainer}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                keyboard={true}
                modules={[Navigation, Pagination, Keyboard]}
                className="mySwiper"
            >
            <SwiperSlide className={classes.swiperContainer}>
                <SwipperInfo
                    ProjecTitle={'Untitled Project'}
                    ProjectDescription ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris.'}
                    Skills={['React','React','React','React']}
                    ImageName ={Project}
                    />
            </SwiperSlide>
            
            <SwiperSlide><SwipperInfo
                    ProjecTitle={'Untitled Project'}
                    ProjectDescription ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris.'}
                    Skills={['React','React','React','React']}
                    ImageName ={Project}
                    /></SwiperSlide>
            <SwiperSlide><SwipperInfo
                    ProjecTitle={'Untitled Project'}
                    ProjectDescription ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris.'}
                    Skills={['React','React','React','React']}
                    ImageName ={Project}
                    /></SwiperSlide>
            <SwiperSlide><SwipperInfo
                    ProjecTitle={'Untitled Project'}
                    ProjectDescription ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris.'}
                    Skills={['React','React','React','React']}
                    ImageName ={Project}
                    /></SwiperSlide>
            <SwiperSlide><SwipperInfo
                    ProjecTitle={'Untitled Project'}
                    ProjectDescription ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris.'}
                    Skills={['React','React','React','React']}
                    ImageName ={Project}
                    /></SwiperSlide>
            </Swiper>
        </div>
    </Fragment>
  );
};

export default Swipper;