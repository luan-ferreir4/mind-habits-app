import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { Input } from "../../Components/Input";
import { InputSelector } from "../inputSelector";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardCreateGroup = ({ handleClose }) => {
  const { createGroup } = useContext(GroupsCommunityContext);

  const schema = yup.object().shape({
    name: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório!"),
    description: yup
      .string()
      .max(100, "Máximo de 100 caracteres")
      .required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToCreateGroup = (data) => {
    createGroup(data);
    handleClose();
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToCreateGroup)}>
          <div className="containerTitleAndInput">
            Título:
            <Input
              type="text"
              label="Título"
              placeholder="Título"
              name="name"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="containerTitleAndInput">
            Descrição:
            <Input
              type="text"
              label="Descrição"
              placeholder="Descrição"
              name="description"
              register={register}
              error={errors.description?.message}
            />
          </div>
          <div className="containerTitleAndInput">
            Categoria:
            <InputSelector
              selectType="category"
              label="Categoria"
              name="category"
              register={register}
              error={errors.category?.message}
            />
          </div>

          <ButtonSubmitContainer type="submit">Criar</ButtonSubmitContainer>
        </form>
      </CardCreateContainer>
    </div>
  );
};
