import React from "react";
import { NavLink } from "react-router-dom";

const AreaButton = ({ text, path }) => (
    <NavLink to={path} className="area-button"><p className="area-button-text">{text}</p></NavLink>
)

export default AreaButton