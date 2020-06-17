import React from "react";
import Button from "../Atoms/AreaButton";
import Link from "../Atoms/Link";

const AreaCard = ({ name }) => (
  <div className="area-card-main-container">
    <p className="area-card-main-container__title">{name}</p>
    <Button text={"Prueba"} path={"/table"} />
    <Button text={"Prueba"} path={"/"} />
    <Button text={"Prueba"} path={"/"} />
    <Button text={"Prueba"} path={"/"} />
    <p className="link__area-card">
      <Link text={"Nueva área"} path={"/"} />
    </p>
  </div>
);

export default AreaCard;
