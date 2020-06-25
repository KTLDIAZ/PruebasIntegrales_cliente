import React, { Component } from "react";
import {
  Pie,
  Bar,
  Line,
  Doughnut,
  HorizontalBar,
  Polar,
} from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: ["dato1", "Dato2", "Dato3"], //Este es el nombre que se le da a los datos, se pueder agregar más o menos
        datasets: [
          {
            label: "Nombre", //Este label solo aparece en los gráficos de tipo Bar
            data: [300, 75, 100], //este es el tamaño que se le asigna a cada dato respectivamente
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], //color asignado a cada dato
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart-basic-container">
        <h2 className="chart-basic-container--title">Título</h2>
        <Bar data={this.state.ChartData} />
      </div>
    );
  }
}

export default Chart;
