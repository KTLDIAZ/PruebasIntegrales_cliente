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
      stages: [],
      filters: [],
      loadComplete: false,
    };
  }

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
    data.forEach((element) => {
      this.setState({ stages: [...this.state.stages, element.stages_detalle] });
    });
    this.setState({
      filters: [
        ...this.state.filters,
        { area: element, tests: [...new Set(this.state.stages)] },
      ],
    });
    this.setState({ loadComplete: true });
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
            {this.state.loadComplete === true &&
              this.state.filters.map((area) => {
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
