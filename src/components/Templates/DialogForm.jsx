import React, { Component } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import Axios from "axios";

class DialogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiStatus: false,
      required: null,
      form: this.props,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit() {
    const state = this.state.form;
    if (
      state.name_detalle &&
      state.exesistem_detalle &&
      state.testmanager_detalle &&
      state.status_detalle &&
      state.observations_detalle
    ) {
      Axios.post(`/api/Detalle/Guardar`, this.state.form)
        .then((res) => {
          console.log(res);
          this.setState({ apiStatus: true, required: null });
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({ required: true });
    }
  }

  render() {
    console.log(this.props);
    const state = this.state.form;
    return (
      <Dialog maxWidth="sm" fullWidth={true} open={this.props.open}>
        <DialogContent dividers={true} style={{ background: "#fff" }}>
          <form id="elemento">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="stages_detalle"
                  name="stages_detalle"
                  type="number"
                  variant="outlined"
                  label="Etapa"
                  defaultValue="1"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name_detalle"
                  name="name_detalle"
                  type="text"
                  label="Nombre de Area"
                  variant="outlined"
                  value={state.name_detalle}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="stepsnuber_detalle"
                  name="stepsnuber_detalle"
                  type="number"
                  variant="outlined"
                  label="Paso N°"
                  defaultValue="1"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  margin="dense"
                  id="exesistem_detalle"
                  name="exesistem_detalle"
                  type="text"
                  label="Descripción"
                  variant="outlined"
                  value={state.exesistem_detalle}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  margin="dense"
                  id="testmanager_detalle"
                  name="testmanager_detalle"
                  type="text"
                  label="Encargado"
                  variant="outlined"
                  value={state.testmanager_detalle}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  margin="dense"
                  id="observations_detalle"
                  name="observations_detalle"
                  type="text"
                  label="Observaciones"
                  variant="outlined"
                  value={state.observations_detalle}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={5}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="status_detalle"
                  fullWidth
                  value={state.status_detalle}
                  onChange={this.handleChange}
                >
                  <MenuItem value={"success"}>Exitoso</MenuItem>
                  <MenuItem value={"failed"}>Fallido</MenuItem>
                  <MenuItem value={"inProcess"}>En proceso</MenuItem>
                  <MenuItem value={"waiting"}>Esperando correción</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          className="dialog-actions"
          style={{ justifyContent: "center" }}
        >
          <Button style={{ color: "#fff" }} onClick={this.handleSubmit}>
            Guardar
          </Button>
          <Button style={{ color: "#fff" }} onClick={this.props.onClose}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DialogForm.defautlProps = {
  form: {
    name_detalle: "",
    stepsnuber_detalle: 1,
    stages_detalle: 1,
    exesistem_detalle: "",
    testmanager_detalle: "",
    status_detalle: "",
    observations_detalle: "",
  },
};

export default DialogForm;
