import classes from "./Navbar.module.css";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import MobileSidebar from "./Components/Sidebar";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  // const setActiveLinkHandler = (linkName) => {
  //   setActiveLink(linkName);
  // };
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.navMain}>
          <div className={classes.navContainer}>
            <div className={classes.navFlex}>
              <div className={classes.navLogo}>
                <Image src={logo} alt="logo" />
              </div>
              <div>
                <MobileSidebar />
              </div>
              <div className={classes.navLinks}>
                <div className={classes.navLinksFlex}>
                  <p
                    className={
                      activeLink === "Home" ? classes.isActive : undefined
                    }
                    onClick={() => setActiveLink("Home")}
                  >
                    Home
                  </p>
                  <p
                    className={
                      activeLink === "About" ? classes.isActive : undefined
                    }
                    onClick={() => setActiveLink("About")}
                  >
                    About Us
                  </p>
                  <p
                    className={
                      activeLink === "Services" ? classes.isActive : undefined
                    }
                    onClick={() => setActiveLink("Services")}
                  >
                    Services
                  </p>
                  <p
                    className={
                      activeLink === "Projects" ? classes.isActive : undefined
                    }
                    onClick={() => setActiveLink("Projects")}
                  >
                    Projects
                  </p>
                  <p
                    className={
                      activeLink === "Testimonial"
                        ? classes.isActive
                        : undefined
                    }
                    onClick={() => setActiveLink("Testimonial")}
                  >
                    Testimonial
                  </p>
                  <div className={classes.navLinksButtonDiv}>
                    <button className={classes.navLinksButton}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
