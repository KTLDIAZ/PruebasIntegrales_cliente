import React from "react";
import {
  DialogContent,
  Dialog,
  Button,
  DialogActions,
} from "@material-ui/core";

const Image = ({ url, alt, open, onClose }) => {
  return (
    <Dialog maxWidth="sm" fullWidth={true} open={open}>
      <DialogContent dividers={true} style={{ background: "#fff" }}>
        <img src={url} alt={alt} />
      </DialogContent>
      <DialogActions
        className="dialog-actions"
        style={{ justifyContent: "center" }}
      >
        <Button style={{ color: "#fff" }} onClick={() => onClose()}>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Image;
