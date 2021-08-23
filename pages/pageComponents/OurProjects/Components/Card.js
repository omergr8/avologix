import classes from "../OurProjects.module.css";
import React from "react";
import project1 from "../../../../public/project1.svg";
import CardModal from "./CardModal";
import Image from "next/image";
const d = [1, 2, 3];
const Card = ({ data }) => {
  return (
    <div>
      <div className={classes.cardMain1}>
        {data.map((dt, i) => (
          <div className={classes.cardMain} key={i}>
            <div className={classes.cardImage}>
              <Image src={dt.imageLink} alt="project1" />
              <div className={classes.absoluteButton}>
                {/* <button className={classes.detailsButton}>See Details</button> */}
                <CardModal details={dt.details} />
              </div>
            </div>
            <div className={classes.cardText}>
              <h2>{dt.heading}</h2>
              <p>{dt.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
