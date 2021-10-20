import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/goals";
import { Input } from "../../Components/Input";
import { InputSelector } from "../inputSelector";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardCreateGoal = () => {
  const { createGoal } = useContext(GoalsContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório!"),
    difficulty: yup.string().required("Campo obrigatório!"),
    how_much_achieved: yup.number().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToCreateGoal = (data) => {
    createGoal(data);
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToCreateGoal)}>
          <div className="containerTitleAndInput">
            Meta:
            <Input
              type="text"
              label="Meta"
              placeholder="Meta"
              name="title"
              register={register}
              error={errors.title?.message}
            />
          </div>
          <div className="containerTitleAndInput">
            Dificuldade:
            <InputSelector
              selectType="dificulty"
              label="Dificuldade"
              name="difficulty"
              register={register}
              error={errors.difficulty?.message}
            />
          </div>
          <div className="containerTitleAndInput">
            Progresso:
            <Input
              type="number"
              label="Progresso"
              placeholder="Progresso"
              name="how_much_achieved"
              register={register}
              error={errors.how_much_achieved?.message}
            />
          </div>

          <ButtonSubmitContainer type="submit">Criar</ButtonSubmitContainer>
        </form>
      </CardCreateContainer>
    </div>
  );
};
