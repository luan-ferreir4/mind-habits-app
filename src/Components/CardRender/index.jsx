import { ButtonSubscribe } from "../ButtonSubscribe";
import { ButtonAbout } from "../ButtonAbout";
import { ButtonUpdate } from "../Button-Update";
import { ButtonRemoveContainer } from "../../Styles/ComponentsStyle/ButtonRemove";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {
  CardGroup,
  ButtonMoreInfo,
  CardGoal,
  CardActivity,
  CardHabit,
  ProgressButton,
  CardGroupCommunity,
} from "../../Styles/ComponentsStyle/CardRender";
import { useHistory } from "react-router";

import { useContext, useState } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { GoalsContext } from "../../Providers/goals";
import { ActivitiesContext } from "../../Providers/activities";

const CardRender = ({ listType, item }) => {
  const { deleteHabit, updateHabit } = useContext(UserHabitsContext);
  const { deleteGoal } = useContext(GoalsContext);
  const { deleteActivity } = useContext(ActivitiesContext);

  const history = useHistory("");

  const handlePushToGroup = () => {
    history.push(`/groupdetails/${item.id}`);
  };

  const handleRemoveHabit = () => {
    deleteHabit(item.id);
  };
  const handleRemoveGoal = () => {
    deleteGoal(item.id);
  };
  const handleRemoveAtivity = () => {
    deleteActivity(item.id);
  };

  const [progress, setProgress] = useState(item.how_much_achieved);

  const handleAddProgress = () => {
    if (progress > 100 && progress >= 0) {
      updateHabit(item.id, progress + 10, false);
    }
    if (progress === 100) {
      updateHabit(item.id, progress, true);
    }
  };

  const handleSubProgress = () => {
    if (progress > 100 && progress > 0) {
      updateHabit(progress - 10);
    }
    if (progress === 100) {
      updateHabit(item.id, progress, true);
    }
  };

  return (
    <>
      {listType === "habit" && (
        <CardHabit>
          <h2>{item.title}</h2>
          <label>
            Categoria: <span>{item.category}</span>
          </label>
          <label>
            Dificuldade: <span>{item.difficulty}</span>
          </label>
          <label>
            Frequência: <span>{item.frequency}</span>
          </label>
          <label>Progresso: </label>
          <label>
            <ProgressButton onClick={handleAddProgress}>+</ProgressButton>
            <Progress
              className="bar"
              type="circle"
              percent={item.how_much_achieved}
            />
            <ProgressButton onClick={handleSubProgress}>-</ProgressButton>
          </label>
          <ButtonRemoveContainer onClick={handleRemoveHabit}>
            Excluir
          </ButtonRemoveContainer>
        </CardHabit>
      )}

      {listType === "group" && (
        <CardGroupCommunity className="group">
          <div className="left">
            <label>Título: {item.name}</label>
            <label>Descrição: {item.description}</label>
            <label>{item.category}</label>
          </div>
          <div className="right">
            <ButtonSubscribe groupId={item.id}>Inscrever-se</ButtonSubscribe>
            <ButtonAbout item={item}>Sobre</ButtonAbout>
          </div>
        </CardGroupCommunity>
      )}

      {listType === "userGroup" && (
        <CardGroup>
          <div>
            <div>Título: {item.name}</div>
            <div>Descrição: {item.description}</div>
            <div>{item.category}</div>
          </div>
          <div className="buttonContainer">
            <ButtonMoreInfo onClick={handlePushToGroup}>
              Ver mais
            </ButtonMoreInfo>
          </div>
        </CardGroup>
      )}

      {listType === "activity" && (
        <CardActivity>
          <h2>{item.title}</h2>
          <label>Data: {item.realization_time}</label>
          <div className="buttonContainer">
            <ButtonUpdate>Atualizar</ButtonUpdate>
            <ButtonRemoveContainer onClick={handleRemoveAtivity}>
              Excluir
            </ButtonRemoveContainer>
          </div>
        </CardActivity>
      )}

      {listType === "goal" && (
        <CardGoal>
          <h2>{item.title}</h2>
          <label>Dificuldade: {item.difficulty}</label>
          <label className="progressbar">
            {}
            Progresso:{" "}
            <Progress percent={item.how_much_achieved} status="active" />
          </label>

          <label>Alcançado:</label>
          <ButtonRemoveContainer onClick={handleRemoveGoal}>
            Excluir
          </ButtonRemoveContainer>
        </CardGoal>
      )}
    </>
  );
};

export default CardRender;
