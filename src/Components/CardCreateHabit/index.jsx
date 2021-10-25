import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { Input } from "../../Components/Input";
import { InputSelector } from "../inputSelector";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardCreateHabit = ({ handleClose }) => {
  const { createHabit } = useContext(UserHabitsContext);

  const schema = yup.object().shape({
    title: yup
      .string()
      .max(50, "Máximo de 50 caracteres")
      .required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
    difficulty: yup.string().required("Campo obrigatório!"),
    frequencyPartOne: yup.number().required("Campo obrigatório!"),
    frequencyPartTwo: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendToCreateHabit = (data) => {
    createHabit(data);
    handleClose();
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToCreateHabit)}>
          <div className="containerTitleAndInput">
            <p>Hábito:</p>
            <Input
              type="text"
              label="Hábito"
              placeholder="Hábito"
              name="title"
              register={register}
              error={errors.title?.message}
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
          <div className="frequencia">
            Frequência desejada:
            <Input
              type="number"
              label="Frequência desejada"
              placeholder="Frequência desejada"
              name="frequencyPartOne"
              register={register}
              error={errors.frequencyPartOne?.message}
            />{" "}
            por
            <InputSelector
              selectType="time"
              label="por"
              name="frequencyPartTwo"
              register={register}
              error={errors.frequencyPartTwo?.message}
            />
          </div>

          <ButtonSubmitContainer type="submit">Criar</ButtonSubmitContainer>
        </form>
      </CardCreateContainer>
    </div>
  );
};
