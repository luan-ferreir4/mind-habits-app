import * as React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { CardUpdate } from "../CardUpdate";
import { ButtonUpdateContainer } from "../../Styles/ComponentsStyle/ButtonUpdate";

export const ButtonUpdate = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonUpdateContainer
        variant="outlined"
        color="success"
        onClick={handleOpen}
      >
        Atualizar
      </ButtonUpdateContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardUpdate item={item} handleClose={handleClose} />
      </Modal>
    </>
  );
};
