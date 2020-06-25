import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ProcessTable from "./Templates/ProcessTable";
import Form from "./Templates/Form";
import NavBar from "./Organisms/NavBar";
import Areas from "./Pages/Areas";
import Chart from "./Atoms/Chart";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/table" component={ProcessTable} />
        <Route path="/table/:id" component={ProcessTable} />
        <Route path="/form" component={Form} />
        <Route path="/areas" component={Areas} />
        <Route path="/chart" component={Chart} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
