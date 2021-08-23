import classes from "./Services.module.css";
import Card from "./Components/Card";
import Image from "next/image";
import ServicesLogo from "../../../public/Services.svg";
const Services = () => {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.mainContainer}>
          <div className={classes.mainTextContainer}>
            <div className={classes.mainHeadingDiv}>
              <h2>Our Services</h2>
              <div className={classes.absoluteText}>
                <Image src={ServicesLogo} alt="service logo" />
              </div>
            </div>
            <p className={classes.mainDescDesktop}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut.
            </p>
          </div>
          <Card />
          <div className={classes.mainTextContainer}>
            <p className={classes.mainDescMobile}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
