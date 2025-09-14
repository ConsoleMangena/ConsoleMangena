/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import "./SideNavbar.css";

export const SideNavbar = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        activeClassName="active"
      >
        <Typography>Home</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#works' }}
        isActive={(match, location) => location.pathname === '/' && location.hash === '#works'}
        activeClassName="active"
      >
        <Typography>Projects</Typography>
      </NavLink>
      <NavLink
        to="/blog"
        activeClassName="active"
      >
        <Typography>Blog</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#about' }}
        isActive={(match, location) => location.pathname === '/' && location.hash === '#about'}
        activeClassName="active"
      >
        <Typography>About</Typography>
      </NavLink>
      <NavLink
        to={{ pathname: '/', hash: '#contact' }}
        isActive={(match, location) => location.pathname === '/' && location.hash === '#contact'}
        activeClassName="active"
      >
        <Typography>Contact</Typography>
      </NavLink>
    </nav>
  );
};