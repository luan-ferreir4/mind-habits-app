import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const { useContext } = require("react");
// const { UserGroupsContext } = require("../../Providers/userGroups");

const ButtonAbout = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="success" onClick={handleOpen}>
        Sobre
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Número de inscritos:{item.item.users_on_group.length}</p>
          <br />
          <p>Atividades cadastradas:{item.item.activities.length}</p>
          <br />
          <p>Metas cadastradas:{item.item.goals.length}</p>
          <br />
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonAbout;
