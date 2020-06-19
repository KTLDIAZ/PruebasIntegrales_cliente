import React from "react";
import Button from "../Atoms/AreaButton";

const AreaCard = ({ name, tests }) => (
  <div className="area-card-main-container">
    <p className="area-card-main-container__title">{name}</p>
    {tests &&
      tests.pruebas.map((test) => (
        <Button key={test.id} text={test.prueba} path={`/table/${test.id}`} />
      ))}
  </div>
);
/* {console.log(tests.pruebas.map((test) => console.log(test.prueba)))} */
export default AreaCard;
