import * as React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { CardCreate } from "../CardCreate";
import { ButtonCreateContainer } from "../../Styles/ComponentsStyle/ButtonCreate";

export const ButtonCreate = ({ listType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {listType === "habit" && (
        <>
          <ButtonCreateContainer
            variant="outlined"
            color="success"
            onClick={handleOpen}
          >
            Criar um hábito
          </ButtonCreateContainer>
        </>
      )}

      {listType === "group" && (
        <>
          <ButtonCreateContainer
            variant="outlined"
            color="success"
            onClick={handleOpen}
          >
            Criar novo grupo
          </ButtonCreateContainer>
        </>
      )}

      {listType === "goal" && (
        <>
          <ButtonCreateContainer
            variant="outlined"
            color="success"
            onClick={handleOpen}
          >
            Criar meta
          </ButtonCreateContainer>
        </>
      )}

      {listType === "activity" && (
        <>
          <ButtonCreateContainer
            variant="outlined"
            color="success"
            onClick={handleOpen}
          >
            Criar atividade
          </ButtonCreateContainer>
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardCreate listType={listType}></CardCreate>
      </Modal>
    </>
  );
};
