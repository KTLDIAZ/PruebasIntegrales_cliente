import React, { useState } from "react";
import AreaCard from "../Organisms/AreaCard";
import Form from "../Templates/DialogForm";

const Home = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const form = {
    id_detalle: null,
    name_detalle: "",
    stepsnuber_detalle: 1,
    stages_detalle: 1,
    exesistem_detalle: "",
    testmanager_detalle: "",
    status_detalle: "",
    observations_detalle: "",
  };

  return (
    <article className="home-main-container">
      <Form
        open={open}
        onClose={closeDialog}
        rowData={form}
        method={"Guardar"}
      />
      <div className="home-second-container">
        <button className="area-button" onClick={openDialog}>
          <p className="area-button-text">Iniciar una nueva Prueba</p>
        </button>
        <img
          src="https://image.flaticon.com/icons/svg/3004/3004081.svg"
          alt="Iniciar Prueba"
          className="img-temp"
        />
      </div>

      <AreaCard name={"Área X"} link={"más áreas"} />
    </article>
  );
};

export default Home;
