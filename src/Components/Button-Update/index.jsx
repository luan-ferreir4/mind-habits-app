import * as React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { CardUpdate } from "../CardUpdate";
import { ButtonUpdateContainer } from "../../Styles/ComponentsStyle/ButtonUpdate";

export const ButtonUpdate = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonUpdateContainer
        variant="outlined"
        color="success"
        onClick={handleOpen}
      >
        Sobre
      </ButtonUpdateContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardUpdate />
      </Modal>
    </div>
  );
};
