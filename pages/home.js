import Navbar from "./pageComponents/Common/Navbar/Navbar";
import MobileSidebar from "./pageComponents/Common/Navbar/Components/Sidebar";
import Hero from "./pageComponents/Hero/Hero";
import Services from "./pageComponents/Services/Services";
import AboutUs from "./pageComponents/AboutUs/AboutUs";
import Best from "./pageComponents/Best/Best";
import OurProjects from "./pageComponents/OurProjects/OurProjects";
import ContactUs from "./pageComponents/ContactUs/ContactUs";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import lightBack from "../public/lightBack.svg";
import greenBack from "../public/greenBack.svg";
import circle1 from "../public/circle1.svg";
import circle2 from "../public/circle2.svg";
const Home = () => {
  return (
    <div className={classes.homeMain}>
      <Navbar />
      <div className={classes.backgroundAbsolute}>
        <Image src={lightBack} alt="lightback" width={900} />
      </div>
      <div className={classes.backgroundAbsolute2}>
        <Image src={greenBack} alt="lightback" width={920} />
      </div>
      <div className={classes.circle1}>
        <div className={classes.circleAbsolute1}>
          <Image src={circle1} alt="circle1" width={550} />
        </div>
        <Hero />
        <Services />
      </div>
      <div className={classes.circle2}>
        <div className={classes.circleAbsolute2}>
          <Image src={circle2} alt="circle1" width={750} />
        </div>
        <AboutUs />
        <Best />
      </div>
      <OurProjects />
      <ContactUs />
    </div>
  );
};
export default Home;
