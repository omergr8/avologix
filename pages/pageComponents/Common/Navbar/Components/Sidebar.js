import classes from "../Navbar.module.css";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileSidebar = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const sideLinks = (
    <div className={classes.drawerBody}>
      <p
        className={activeLink === "Home" ? classes.isActive : undefined}
        onClick={() => setActiveLink("Home")}
      >
        Home
      </p>
      <p
        className={activeLink === "About" ? classes.isActive : undefined}
        onClick={() => setActiveLink("About")}
      >
        About Us
      </p>
      <p
        className={activeLink === "Services" ? classes.isActive : undefined}
        onClick={() => setActiveLink("Services")}
      >
        Services
      </p>
      <p
        className={activeLink === "Projects" ? classes.isActive : undefined}
        onClick={() => setActiveLink("Projects")}
      >
        Projects
      </p>
      <p
        className={activeLink === "Testimonial" ? classes.isActive : undefined}
        onClick={() => setActiveLink("Testimonial")}
      >
        Testimonial
      </p>
    </div>
  );

  useEffect(() => {
    if (isSideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSideOpen]);

  return (
    <div className={classes.sidebarMain}>
      <div
        className={classes.mobileMenu}
        onClick={() => setIsSideOpen(!isSideOpen)}
      >
        <GiHamburgerMenu />
      </div>
      <div className={isSideOpen ? classes.isDisplay : classes.isHide}>
        <div className={classes.sidebarFixed}>
          {/* <div className={classes.sideLogo}>
            <Image src={logo} alt="logo" />
          </div> */}
          <div className={classes.sideLogo}>
            <button className={classes.navLinksButton}>Contact Us</button>
          </div>
          {sideLinks}
        </div>
      </div>
      {isSideOpen && (
        <div
          className={classes.sidebarOverlay}
          onClick={() => setIsSideOpen(!isSideOpen)}
        />
      )}
    </div>
  );
};
export default MobileSidebar;
