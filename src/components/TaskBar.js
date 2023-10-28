import React, { useState } from "react";
import classes from "./TaskBar.module.css";
import Logo from "../../src/Assets/Logo.png";

const TaskBar = (props) => {
  const [activeItem, setActiveItem] = useState("Home");

  const openPdf = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/CC_RitaSaraiva";
    window.open(pdfUrl, "_blank");
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    // // Call the appropriate click handler (props.onClickHome, props.onClickAbout, etc.) based on the clicked item.
    // props.onPageChange(item);
    switch (item) {
      case "Home":
        props.onClickHome();
        break;
      case "About":
        props.onClickAbout();
        break;
      case "Experience":
        props.onClickExperience();
        break;
      case "Projects":
        props.onClickProjects();
        break;
      case "Contact":
        props.onClickContact();
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.IDK}>
      <div className={classes.container}>
        <div className={classes.coisa}>
          <img src={Logo} alt="Logo" className={classes.ImagimeStyle} />
          <div className={classes.taskOptionsContainer}>
            <ul className={classes.buttonsContainer}>
              <li
                className={`${classes.buttonStyle} ${
                  activeItem === "Home" ? classes.active : ""
                }`}
                onClick={() => handleItemClick("Home")}
              >
                Home
              </li>
              <li
                className={`${classes.buttonStyle} ${
                  activeItem === "About" ? classes.active : ""
                }`}
                onClick={() => handleItemClick("About")}
              >
                About
              </li>
              <li
                className={`${classes.buttonStyle} ${
                  activeItem === "Experience" ? classes.active : ""
                }`}
                onClick={() => handleItemClick("Experience")}
              >
                Experience
              </li>
              <li
                className={`${classes.buttonStyle} ${
                  activeItem === "Projects" ? classes.active : ""
                }`}
                onClick={() => handleItemClick("Projects")}
              >
                Projects
              </li>
              <li
                className={`${classes.buttonStyle} ${
                  activeItem === "Contact" ? classes.active : ""
                }`}
                onClick={() => handleItemClick("Contact")}
              >
                Contact
              </li>
            </ul>
          </div>
          <button className={classes.resumeButtonContainer} onClick={openPdf}>
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
