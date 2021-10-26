import * as React from "react";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { ButtonCreateContainer } from "../../Styles/ComponentsStyle/ButtonCreate";
import { CardCreateHabit } from "../../Components/CardCreateHabit";
import { CardCreateGroup } from "../../Components/CardCreateGroup";
import { CardCreateGoal } from "../../Components/CardCreateGoal";
import { CardCreateActivity } from "../../Components/CardCreateActivity";
import { Box } from "@material-ui/core"

export const ButtonCreate = ({ listType, idGroup }) => {
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
            <CardCreateHabit handleClose={handleClose}></CardCreateHabit>
            </Box>
          </Modal>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
            <CardCreateGroup handleClose={handleClose}></CardCreateGroup>
            </Box>
          </Modal>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
            <CardCreateGoal
              handleClose={handleClose}
              idGroup={idGroup}
            ></CardCreateGoal>
            </Box>
          </Modal>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
            <CardCreateActivity
              idGroup={idGroup}
              handleClose={handleClose}
            ></CardCreateActivity>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
