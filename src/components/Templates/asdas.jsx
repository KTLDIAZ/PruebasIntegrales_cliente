/* import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Grid, NativeSelect } from "@material-ui/core";
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
import Axios from "axios";

const asdas = () => {
  /* const changeDataCaso = async (selectedRow) => {
    let response = await this.updateEstadoAtencionInDataBase(
      selectedRow.estado_atencion,
      selectedRow.id_caso
    );
    if (response === "Ok") {
      //Se actulizo el estado de aceptacion en el backend entonces hay que actualizar en el frontend
      let pos = this.getPosDataCaso(selectedRow.id_caso);
      let newArray = this.state.casoData;
      newArray[pos] = selectedRow;
      this.setState({ casoData: newArray });
    }
    this.showDialogAlert(!response === "okay");
  }; 

  const handleChangeStatus = (name, selectedRow) => async (e) => {
    selectedRow[name] = e.target.value;
    //let result = await Axios.update("url", data);
  };

  const [state, setState] = useState([
    {
      number: 1,
      description: "asdasd",
      executable: "idk",
      by: "el scrum",
      observations: "10/10",
      status: "en proceso",
    },
    {
      number: 2,
      description: "asdasd",
      executable: "idk",
      by: "el scrum",
      observations: "10/10",
      status: "en proceso",
    },
    {
      number: 3,
      description: "asdasd",
      executable: "idk",
      by: "el scrum",
      observations: "10/10",
      status: "en proceso",
    },
  ]);

  const columns = [
    { title: "No.", field: "number", editable: "Never" },
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
      render: (rowData) => (
        <NativeSelect
          //value={rowData.status}
          //onChange={handleChangeStatus("status", rowData)}
          name="status"
          inputProps={{ "aria-label": "status" }}
        >
          <option value="Exitoso">Exitoso</option>
          <option value="En proceso">En proceso</option>
          <option value="Fallido">Fallido</option>
          <option value="Esperando correción">Esperando correción</option>
        </NativeSelect>
      ),
    },
  ];

  useEffect(() => {
    Axios.get(`http://my-json-server.typicode.com/betoquiroga/json-db/cursos/`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

  const TableIcons = {
    Add: AddBox,
    Delete: DeleteOutline,
    Edit: Edit,
    ThirdStateCheck: Remove,
    Check: CheckIcon,
    Clear: ClearIcon,
    FirstPage: FirstPage,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    Search: Search,
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
        data={state}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </Grid>
  );
};

export default asdas;
 */
