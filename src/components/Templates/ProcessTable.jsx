import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { Grid } from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Remove from "@material-ui/icons/Remove";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const ProcessTable = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: "No.", field: "number" },
      { title: "Descripción", field: "description" },
      { title: "Ejecutable del sistema", field: "executable" },
      {
        title: "Encargado",
        field: "by",
      },
      { title: "Observaciones", field: "observations" },
      { title: "Status", field: "status" },
    ],
    data: [
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
    ],
  });

  const TableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
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
        columns={state.columns}
        data={state.data}
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

export default ProcessTable;
