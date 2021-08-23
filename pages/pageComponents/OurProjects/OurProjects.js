import classes from "./OurProjects.module.css";
import React, { useState, useEffect } from "react";
import { projectData } from "../Common/projectsData";
import projects from "../../../public/projects.svg";
import Image from "next/image";
import Card from "./Components/Card";
import { IoIosArrowDown } from "react-icons/Io";
import { IoIosArrowUp } from "react-icons/Io";

const OurProjects = () => {
  const [data_, setData_] = useState(projectData.slice(0, 3));
  const [isAll, setIsAll] = useState(false);
  const onViewAll = () => {
    setData_(projectData);
    setIsAll(true);
  };
  const onViewLess = () => {
    setData_(projectData.slice(0, 3));
    setIsAll(false);
  };
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.text}>
          <div className={classes.heading}>
            <div className={classes.absolute}>
              <Image src={projects} alt="projects" />
            </div>
            <h2>Our Projects</h2>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut.
          </p>
        </div>
        <Card data={data_} />
        {!isAll ? (
          <div className={classes.viewAllDiv} onClick={onViewAll}>
            <p>View All</p>
            <div className={classes.arrowIcons}>
              <div>
                <IoIosArrowDown />
              </div>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.viewAllDiv} onClick={onViewLess}>
            <p>View Less</p>
            <div className={classes.arrowIcons}>
              <div>
                <IoIosArrowUp />
              </div>
              <div>
                <IoIosArrowUp />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default OurProjects;
