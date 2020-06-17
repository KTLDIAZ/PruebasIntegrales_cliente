import React from "react";
import AreaCard from "../Organisms/AreaCard";
import Button from "../Atoms/AreaButton";

const Home = () => (
  <article className="home-main-container">
    <div className="home-second-container">
      <Button text={"Iniciar una nueva Prueba"} path={"/"} />
      <img
        src="https://image.flaticon.com/icons/svg/3004/3004081.svg"
        alt=""
        className="img-temp"
      />
    </div>

    <AreaCard name={"Área X"} link={"más áreas"} />
  </article>
);

export default Home;
