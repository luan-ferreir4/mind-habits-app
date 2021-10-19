import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useContext } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";

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

const CardCreate = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { createGroup } = useContext(UserGroupsContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    createGroup(data);
  };

  return (
    <div>
      <Button variant="outlined" color="success" onClick={handleOpen}>
        Criar grupo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Criar grupo:</p>
          <br />
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input type="text" placeholder="Nome" {...register("name")} />
            <br />
            {errors.name?.message}
            <br />
            <input
              type="text"
              placeholder="Descrição"
              {...register("description")}
            />
            <br />
            {errors.description?.message}
            <br />
            <input
              type="text"
              placeholder="Categoria"
              {...register("category")}
            />
            <br />
            {errors.category?.message}
            <br />
            <br />
            <Button variant="outlined" color="success" type="submit">
              Criar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CardCreate;
