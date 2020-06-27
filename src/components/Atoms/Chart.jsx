import React, { Component } from "react";
import { Polar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartData: {
        labels: ["Exitoso", "En proceso", "Fallido", "Esperando Corrección"], //Este es el nombre que se le da a los datos, se pueder agregar más o menos
        datasets: [
          {
            label: "Status", //Este label solo aparece en los gráficos de tipo Bar
            data: this.props.data, //este es el tamaño que se le asigna a cada dato respectivamente
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9b9b9b"], //color asignado a cada dato
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart-basic-container">
        <h2 className="chart-basic-container--title">{this.props.title}</h2>
        <Polar data={this.state.ChartData} />
      </div>
    );
  }
}

export default Chart;
