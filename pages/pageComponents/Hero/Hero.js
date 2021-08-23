import classes from "./Hero.module.css";
import Image from "next/image";
import hero from "../../../public/hero.svg";
const Hero = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.heroFlex}>
          <div className={classes.text}>
            <h2>
              Inventing Not <span>For Business</span>,<br /> Inventing For{" "}
              <span>Tomorrow</span>
            </h2>
            <div className={classes.desktop}>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut.
              </p>
              <button className={classes.quoteButton}>Get A Quote</button>
            </div>
          </div>
          <div className={classes.imageDiv}>
            <Image src={hero} alt="hero" />
          </div>
          <div className={classes.mobile}>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut.
            </p>
            <button className={classes.quoteButton}>Get A Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
