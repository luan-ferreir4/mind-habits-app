import * as React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { CardAbout } from "../CardAbout";
import { ButtonAboutContainer } from "../../Styles/ComponentsStyle/ButtonAbout";

export const ButtonAbout = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ButtonAboutContainer
        variant="outlined"
        color="success"
        onClick={handleOpen}
      >
        Sobre
      </ButtonAboutContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardAbout groupSpecific={item}></CardAbout>
      </Modal>
    </div>
  );
};
