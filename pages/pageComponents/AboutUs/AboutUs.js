import classes from "./AboutUs.module.css";
import Image from "next/image";
import aboutUs from "../../../public/aboutUs.svg";
import about from "../../../public/about.svg";
import about2 from "../../../public/about2.svg";
const AboutUs = () => {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.flex}>
            <div className={classes.headDivMobile}>
              <h2>About Us</h2>
              <div className={classes.Absolute}>
                <Image src={about2} alt="about" />
              </div>
            </div>
            <div className={classes.image}>
              <Image src={aboutUs} alt="about" width="500px" />
            </div>
            <div className={classes.text}>
              <div className={classes.headDivDesktop}>
                <h2>About Us</h2>
                <div className={classes.Absolute}>
                  <Image src={about} alt="about" />
                </div>
              </div>
              <p>
                Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea
                Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In
                Velit Esse Cillum Dolore Eu Fugiat Nulla Pariaturquis.
              </p>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Min Veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
