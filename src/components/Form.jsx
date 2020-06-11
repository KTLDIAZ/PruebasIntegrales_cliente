import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";

const DialogForm = () => {
  return (
    <Dialog open={true} style={{ background: "#F5F5F5" }}>
      <DialogContent style={{ background: "#e57373" }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="user"
          type="text"
          placeholder="Usuario"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          name="pass"
          type="Password"
          placeholder="Contraseña"
          fullWidth
        />
      </DialogContent>
      <DialogActions style={{ background: "White", justifyContent: "Center" }}>
        <Button color="primary">Login</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogForm;
