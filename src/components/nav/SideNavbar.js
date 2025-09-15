/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const ids = ["home", "works", "about", "contact"];
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-50% 0px -50% 0px", // triggers when section crosses viewport center
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Reset active section when not on home route to avoid stale highlights
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
    }
  }, [location.pathname]);

  return (
    <nav>
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <NavLink
        exact
        to="/"
        isActive={() => location.pathname === '/' && activeSection === "home"}
        activeClassName="active"
      >
        <Typography>Home</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#works' }}
        isActive={() => location.pathname === '/' && activeSection === 'works'}
        activeClassName="active"
      >
        <Typography>Projects</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#about' }}
        isActive={() => location.pathname === '/' && activeSection === 'about'}
        activeClassName="active"
      >
        <Typography>About</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#contact' }}
        isActive={() => location.pathname === '/' && activeSection === 'contact'}
        activeClassName="active"
      >
        <Typography>Contact</Typography>
      </NavLink>
      {/* Blog removed */}
    </nav>
  );
};