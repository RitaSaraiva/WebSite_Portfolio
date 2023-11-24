import React from "react";
import { Fragment } from "react";
import classes from "./Swipper.module.css";
import Project from "../../Assets/Homepage seen on computer screen.png";
import LearnWithSobrasIMG from "../../Assets/ReciclaComOCascas.png";
import BlueTicketIMG from "../../Assets/BlueTicketApp.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import SwipperInfo from "./SwipperInfo";
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
              ProjecTitle={"Aprende com o Sobras"}
              ProjectDescription={
                "Learn with Sobras consists of a dynamic browser game made for the council of Serpa. The game combines entertainment with education. The player dives into a recycling factory, sorting objects on a speeding treadmill into the right bins. There is also a curiosity corner that allows the players to learn in an interactive way about recycling"
              }
              Skills={["Unity", "Photoshop", "Game Design", "Figma"]}
              ImageName={LearnWithSobrasIMG}
            />
          </SwiperSlide>

          <SwiperSlide>
            <SwipperInfo
              ProjecTitle={"BlueTicket App"}
              ProjectDescription={
                "The BlueTicket app is an app that allows the user to do everything that the blueticket website allows and more. Allows the user to sign-in/up to their blueticket account, view all available shows/activities, purchase tickets or add those events to your favorites, and see all your tickets that can latter be showed at the event revenue"
              }
              Skills={["React Native", "UX/UI", "CSS"]}
              ImageName={BlueTicketIMG}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipperInfo
              ProjecTitle={"VR Firefighter Simulator"}
              ProjectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris."
              }
              Skills={["React", "React", "React", "React"]}
              ImageName={Project}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipperInfo
              ProjecTitle={"Untitled Project"}
              ProjectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris."
              }
              Skills={["React", "React", "React", "React"]}
              ImageName={Project}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipperInfo
              ProjecTitle={"Untitled Project"}
              ProjectDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.           Donec convallis tellus eget magna feugiat scelerisque. Aliquam ligula turpis, gravida in lacus vitae, tempus dictum mauris."
              }
              Skills={["React", "React", "React", "React"]}
              ImageName={Project}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default Swipper;
