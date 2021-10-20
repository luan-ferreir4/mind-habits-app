import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { Input } from "../../Components/Input";
import { InputSelector } from "../inputSelector";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardCreateHabit = () => {
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
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToCreateHabit)}>
          <Input
            type="text"
            label="Hábito"
            placeholder="Hábito"
            name="title"
            register={register}
            error={errors.title?.message}
          />
          <InputSelector
            selectType="category"
            label="Categoria"
            name="category"
            register={register}
            error={errors.category?.message}
          />
          <InputSelector
            selectType="difficulty"
            label="Dificuldade"
            name="difficulty"
            register={register}
            error={errors.difficulty?.message}
          />
          <Input
            type="number"
            label="Frequência desejada"
            placeholder="Frequência desejada"
            name="frequencyPartOne"
            register={register}
            error={errors.frequencyPartOne?.message}
          />
          <InputSelector
            selectType="time"
            label="por"
            name="frequencyPartTwo"
            register={register}
            error={errors.frequencyPartTwo?.message}
          />

          <ButtonSubmitContainer type="submit" />
        </form>
      </CardCreateContainer>
    </div>
  );
};
