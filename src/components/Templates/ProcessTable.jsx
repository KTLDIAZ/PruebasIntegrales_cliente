import React, { Component } from "react";
import MaterialTable from "material-table";
import { Grid } from "@material-ui/core";
import Add from "@material-ui/icons/AddBox";
import Edit from "@material-ui/icons/Edit";
import Remove from "@material-ui/icons/Remove";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import NextPage from "@material-ui/icons/ChevronLeft";
import PreviousPage from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Axios from "axios";
import Form from "./DialogForm";
import Image from "../Organisms/Image";

class ProcessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rowData: null,
      open: false,
      openImage: false,
      apiStatus: false,
      id: this.props.match.params.id,
      testId: this.props.match.params.testId,
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.openImage = this.openImage.bind(this);
    this.closeImage = this.closeImage.bind(this);
  }

  componentDidMount() {
    const { id, testId } = this.state;
    Axios.get(`/api/Detalle/Filtro?name=${testId}&stage=${id}`)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  handleAdd = async (data) => {
    await Axios.post(`/api/Detalle/Guardar`, data)
      .then((res) => {
        console.log(res);
        this.setState({ apiStatus: true });
      })
      .catch((err) => console.log(err));
  };

  handleUpdate = async (data) => {
    await Axios.post(`/api/Detalle/Actualizar`, data)
      .then((res) => {
        console.log(res);
        this.setState({ apiStatus: true });
      })
      .catch((err) => console.log(err));
  };

  openDialog(rowData) {
    this.setState({ open: true, rowData });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  openImage(rowData) {
    this.setState({ openImage: true, rowData });
  }

  closeImage() {
    this.setState({ openImage: false });
  }

  render() {
    const columns = [
      { title: "No.", field: "stepsnuber_detalle", width: "100px" },
      {
        title: "Descripción",
        field: "exesistem_detalle",
        width: "230px",
      },
      {
        title: "Encargado",
        field: "testmanager_detalle",
        width: "200px",
      },
      { title: "Observaciones", field: "observations_detalle", width: "220px" },
      {
        title: "Status",
        field: "status_detalle",
        width: "220px",
        lookup: {
          success: "Exitoso",
          inProcess: "En proceso",
          failed: "Fallido",
          waiting: "Esperando correción",
        },
      },
    ];

    const TableIcons = {
      Add,
      Edit,
      Check,
      Clear,
      FirstPage,
      LastPage,
      NextPage,
      PreviousPage,
      Search,
      ThirdStateCheck: Remove,
      ResetSearch: Clear,
      SortArrow: ArrowUpward,
    };

    const { id, testId, open, rowData, openImage } = this.state;

    return (
      <Grid
        container
        style={{
          width: "100%",
          alignSelf: "center",
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "10%",
        }}
      >
        {open === true ? (
          <Form
            open={open}
            onClose={this.closeDialog}
            rowData={rowData}
            method={"Actualizar"}
          />
        ) : (
          <p></p>
        )}
        {openImage === true ? (
          <Image
            open={openImage}
            url={rowData.image_detalle}
            onClose={this.closeImage}
          />
        ) : (
          <p></p>
        )}
        {this.state.data && (
          <MaterialTable
            title={`Etapa ${id}: ${testId}`}
            icons={TableIcons}
            columns={columns}
            options={{
              actionsColumnIndex: -1,
            }}
            actions={[
              (rowData) => ({
                icon: VisibilityIcon,
                hidden: rowData.status_detalle === "waiting" ? false : true,
                tooltip: "Abrir incidencia",
                onClick: (event) => this.openDialog(rowData),
              }),
              (rowData) => ({
                icon: AttachmentIcon,
                hidden: rowData.image_detalle ? false : true,
                tooltip: "Ver imagen",
                onClick: (event) => this.openImage(rowData),
              }),
            ]}
            data={this.state.data}
            editable={{
              isDeleteHidden: () => true,
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    newData.name_detalle = testId;
                    newData.stages_detalle = id;
                    await this.handleAdd(newData);
                    if (this.state.apiStatus)
                      this.setState({
                        data: [...this.state.data, newData],
                        apiStatus: false,
                      });
                    if (newData.status_detalle === "waiting")
                      this.setState({ open: true, rowData: newData });
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(async () => {
                    const dataUpdate = [...this.state.data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    newData.name_detalle = testId;
                    newData.stages_detalle = id;
                    await this.handleUpdate(newData);
                    if (this.state.apiStatus) {
                      this.setState({
                        data: [...dataUpdate],
                        apiStatus: false,
                      });
                    }
                    if (newData.status_detalle === "waiting")
                      this.setState({ open: true, rowData: newData });
                    resolve();
                  }, 1000);
                }),
            }}
          />
        )}
      </Grid>
    );
  }
}

export default ProcessTable;
