import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { Input } from "../../Components/Input";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardUpdate = () => {
  const { updateActivity } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToUpdateActivity = (data) => {
    updateActivity(data);
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToUpdateActivity)}>
          <div className="containerTitleAndInput">
            Atividade:
            <Input
              type="text"
              label="Atividade"
              placeholder="Atividade"
              name="title"
              register={register}
              error={errors.title?.message}
            />
          </div>

          <ButtonSubmitContainer type="submit">Atualizar</ButtonSubmitContainer>
        </form>
      </CardCreateContainer>
    </div>
  );
};
