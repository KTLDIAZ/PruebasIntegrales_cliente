import React from "react";
import AreaCard from "../Organisms/AreaCard";
import Link from "../Atoms/Link";

const Areas = () => (
  <>
    <article className="areas-main-container">
      <div className="areas-main-container__link">
        <Link text={"Nueva Área"} path={"/"} />
      </div>

      <div className="areas-main-container__grid">
        <AreaCard name={"Área A"} />
        <AreaCard name={"Área B"} />
        <AreaCard name={"Área C"} />
        <AreaCard name={"Área D"} />
        <AreaCard name={"Área E"} />
      </div>
    </article>
  </>
);

export default Areas;
