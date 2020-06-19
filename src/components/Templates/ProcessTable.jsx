import React, { Component } from "react";
import MaterialTable from "material-table";
import { Grid } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Remove from "@material-ui/icons/Remove";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Axios from "axios";

const api = process.env.REACT_APP_API_URL;
class ProcessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          number: 1,
          description: "asdasd",
          executable: "idk",
          by: "el scrum",
          observations: "10/10",
          status: "waiting",
        },
        {
          number: 2,
          description: "asdasd",
          executable: "idk",
          by: "el scrum",
          observations: "10/10",
          status: "inProcess",
        },
        {
          number: 3,
          description: "a",
          executable: "idk",
          by: "el scrum",
          observations: "10/10",
          status: "success",
        },
      ],
    };
  }

  /* componentDidMount() {
    Axios.get(`${api}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } */

  handleAdd() {
    Axios.post(`${api}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleUpdate() {
    Axios.put(`${api}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleDelete() {
    Axios.delete(`${api}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    const columns = [
      { title: "No.", field: "number", editable: "never" },
      { title: "Descripción", field: "description" },
      { title: "Ejecutable del sistema", field: "executable" },
      {
        title: "Encargado",
        field: "by",
      },
      { title: "Observaciones", field: "observations" },
      {
        title: "Status",
        field: "status",
        lookup: {
          success: "Exitoso",
          inProcess: "En proceso",
          failed: "Fallido",
          waiting: "Esperando correción",
        },
      },
    ];

    const TableIcons = {
      Add: AddBox,
      Delete: DeleteOutline,
      Edit: Edit,
      ThirdStateCheck: Remove,
      Check: CheckIcon,
      ResetSearch: ClearIcon,
      Clear: ClearIcon,
      FirstPage: FirstPage,
      LastPage: LastPage,
      NextPage: ChevronRight,
      PreviousPage: ChevronLeft,
      Search: Search,
      SortArrow: ArrowUpward,
    };

    return (
      <Grid
        container
        justify="flex-end"
        style={{
          width: "70%",
          alignSelf: "center",
          margin: "10%",
        }}
      >
        <MaterialTable
          title="Area XXX"
          icons={TableIcons}
          columns={columns}
          /* options={{
          search: false,
        }} */
          data={this.state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  this.setState({ data: [...this.state.data, newData] });

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...this.state.data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  this.setState({ data: [...dataUpdate] });
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...this.state.data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  this.setState({ data: [...dataDelete] });

                  resolve();
                }, 1000);
              }),
          }}
        />
      </Grid>
    );
  }
}

export default ProcessTable;
