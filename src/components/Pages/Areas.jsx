import React, { Component } from "react";
import AreaCard from "../Organisms/AreaCard";
import Link from "../Atoms/Link";
import Axios from "axios";

class Areas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      areas: [],
      filters: [],
      loadComplete: false,
    };
  }

  /* exesistem_detalle: "Compras.exe"
id_detalle: 1
name_detalle: "Compra"
observations_detalle: "Ninguna"
stages_detalle: 1
status_detalle: "success"
stepsnuber_detalle: 1
testmanager_detalle: "Fernando" */

  getAreas = async () => {
    let res = await Axios.get(`/api/Detalle/ObtenerTodos`);
    let data = res.data;
    this.setState({ data });
    this.getFilter();
  };

  getFilter() {
    this.state.data.forEach((element) => {
      this.setState({ areas: [...this.state.areas, element.name_detalle] });
    });
    this.setState({ areas: [...new Set(this.state.areas)] });
    this.state.areas.forEach((element) => {
      this.getArea(element);
    });
  }

  getArea = async (element) => {
    let res = await Axios.get(`/api/Detalle/Filtro?name=${element}`);
    let data = res.data;
    //console.log(data);
    this.setState({
      filters: [...this.state.filters, { area: element, tests: data }],
    });
    this.setState({ loadComplete: true });
    //console.log(this.state.filters);
  };

  componentDidMount() {
    this.getAreas();
  }

  render() {
    return (
      <>
        <article className="areas-main-container">
          <div className="areas-main-container__link">
            <Link text="Nueva Área" path={"/"} />
          </div>
          <div className="areas-main-container__grid">
            {/*console.log(this.state.filters[0].tests, this.state.filters[0].area);*/}
            {this.state.loadComplete === true &&
              this.state.filters.map((area) => {
                console.log(this.state.filters);
                return (
                  <AreaCard
                    key={area.area}
                    name={area.area}
                    tests={area.tests}
                  />
                );
              })}
          </div>
        </article>
      </>
    );
  }
}

export default Areas;
