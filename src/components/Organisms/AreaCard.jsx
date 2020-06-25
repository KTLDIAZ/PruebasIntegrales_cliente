import React from "react";
import Button from "../Atoms/AreaButton";

const AreaCard = ({ name, tests }) => {
  return (
    <div className="area-card-main-container">
      <p className="area-card-main-container__title">{name}</p>
      {tests &&
        tests.map((test) => (
          <Button
            key={test.stages_detalle}
            text={`Etapa: ${test}`}
            path={`/table/${name}/${test}`}
          />
        ))}
    </div>
  );
};
export default AreaCard;
