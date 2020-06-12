import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProcessTable from "./Templates/ProcessTable";
import Form from "./Templates/Form";
import NavBar from "./Organisms/NavBar";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/table" component={ProcessTable} />
      <Route path="/form" component={Form} />
    </>
  );
};

export default AppRoutes;
