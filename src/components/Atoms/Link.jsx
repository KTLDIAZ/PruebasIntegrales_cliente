import React from "react"
import { NavLink } from "react-router-dom"

const Link = ({ text, path }) => (
    <p className="link"> {text} <NavLink to={path}></NavLink></p>
)

export default Link