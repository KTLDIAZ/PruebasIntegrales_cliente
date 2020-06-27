import React, { Component } from "react";
import Form from "../Templates/DialogForm";
import Chart from "../Atoms/Chart";
import Axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      success: 0,
      failed: 0,
      waiting: 0,
      inProcess: 0,
      open: false,
      dataComplete: false,
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  getStatus = async () => {
    await this.state.data.forEach((element) => {
      switch (element.status_detalle) {
        case "success":
          this.setState({
            success: this.state.success + 1,
          });
          break;
        case "inProcess":
          this.setState({
            inProcess: this.state.inProcess + 1,
          });
          break;
        case "failed":
          this.setState({
            failed: this.state.failed + 1,
          });
          break;
        case "waiting":
          this.setState({
            waiting: this.state.waiting + 1,
          });
          break;
        default:
          break;
      }
    });
    this.setState({ dataComplete: true });
  };

  getData = async () => {
    await Axios.get(`/api/Detalle/ObtenerTodos`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
    this.getStatus();
  };

  componentDidMount() {
    this.getData();
  }

  render() {
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
    const { success, inProcess, failed, waiting, dataComplete } = this.state;
    return (
      <article className="home-main-container">
        <Form
          open={this.state.open}
          onClose={this.closeDialog}
          rowData={form}
          method={"Guardar"}
        />
        <div className="home-second-container">
          <button className="area-button" onClick={this.openDialog}>
            <p className="area-button-text">Iniciar una nueva Prueba</p>
          </button>
          <img
            src="https://image.flaticon.com/icons/svg/3004/3004081.svg"
            alt="Iniciar Prueba"
            className="img-temp"
          />
        </div>
        {dataComplete === true ? (
          <Chart
            title="Status general"
            data={[success, inProcess, failed, waiting]}
          />
        ) : (
          <p />
        )}
      </article>
    );
  }
}

export default Home;
