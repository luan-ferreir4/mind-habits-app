import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { Input } from "../../Components/Input";
import { CardCreateContainer } from "../../Styles/ComponentsStyle/CardCreate";
import { ButtonSubmitContainer } from "../../Styles/ComponentsStyle/ButtonSubmit";

export const CardUpdate = ({ item, handleClose }) => {
  const { updateActivity } = useContext(ActivitiesContext);
  const [itemTitle, setItemTitle] = useState(item.title);
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

  const sendToUpdateActivity = (data) => {
    handleClose();
    updateActivity(data, item.id);
  };

  const titlemod = (e) => {
    setItemTitle(e.value);
  };

  return (
    <div>
      <CardCreateContainer>
        <form onSubmit={handleSubmit(sendToUpdateActivity)}>
          <div className="containerTitleAndInput">
            <label>
              Atividade:
              <Input
                type="text"
                label="Atividade"
                value={itemTitle}
                onChange={titlemod}
                name="title"
                register={register}
                error={errors.title?.message}
              />
            </label>
            <label>
              Data:
              <Input
                type="date"
                label="Data"
                placeholder="Data"
                name="realization_time"
                register={register}
                error={errors.realization_time?.message && "Data invalida"}
              />
            </label>
          </div>

          <ButtonSubmitContainer type="submit">Atualizar</ButtonSubmitContainer>
        </form>
      </CardCreateContainer>
    </div>
  );
};
