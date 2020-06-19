import React, { Component } from "react";
import AreaCard from "../Organisms/AreaCard";
import Link from "../Atoms/Link";
import Axios from "axios";

const api = process.env.REACT_APP_API_URL;
class Areas extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        area: "a",
        pruebas: [
          { prueba: "x", id: 1 },
          { prueba: "s", id: 2 },
          { prueba: "sadas", id: 3 },
        ],
      },
      {
        id: 2,
        area: "b",
        pruebas: [
          { prueba: "x", id: 1 },
          { prueba: "s", id: 2 },
          { prueba: "sadas", id: 3 },
        ],
      },
      {
        id: 3,
        area: "c",
        pruebas: [
          { prueba: "x", id: 1 },
          { prueba: "s", id: 2 },
          { prueba: "sadas", id: 3 },
        ],
      },
    ];
  }

  componentDidMount() {
    Axios.get(`${api}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <article className="areas-main-container">
          <div className="areas-main-container__link">
            <Link text="Nueva Área" path={"/"} />
          </div>
          <div className="areas-main-container__grid">
            {this.state &&
              this.state.map((area) => (
                <AreaCard key={area.id} name={area.area} tests={area.pruebas} />
              ))}
          </div>
        </article>
      </>
    );
  }
}

export default Areas;
