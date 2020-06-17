import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ text, path }) => (
  <p className="link">
    <NavLink to={path}>{text} </NavLink>
  </p>
);

export default Link;
