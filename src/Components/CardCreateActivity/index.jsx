import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { Input } from "../../Components/Input";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardCreateActivity = () => {
  const { createActivity } = useContext(ActivitiesContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório!"),
    realization_time: yup.date().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToCreateActivity = (data) => {
    createActivity(data);
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToCreateActivity)}>
          <Input
            type="text"
            label="Atividade"
            placeholder="Atividade"
            name="title"
            register={register}
            error={errors.title?.message}
          />

          <Input
            type="date"
            label="Data"
            placeholder="Data"
            name="realization_time"
            register={register}
            error={errors.realization_time?.message}
          />

          <ButtonSubmitContainer type="submit" />
        </form>
      </CardCreateContainer>
    </div>
  );
};
