import React from "react";
import Button from "../Atoms/AreaButton";
import Link from "../Atoms/Link";

const AreaCard = ({ name, link }) => (
  <div className="area-card-main-container">
    <p className="area-card-main-container__title">{name}</p>
    <Button text={"Prueba"} path={"/"} />
    <Button text={"Prueba"} path={"/"} />
    <Button text={"Prueba"} path={"/"} />
    <Button text={"Prueba"} path={"/"} />
    <p className="link-area-card">
      <Link text={link} path={"/areas"} />
    </p>
  </div>
);

export default AreaCard;
