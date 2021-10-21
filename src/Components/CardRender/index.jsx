import { ButtonSubscribe } from "../ButtonSubscribe";
import { ButtonAbout } from "../ButtonAbout";
import { ButtonUpdate } from "../Button-Update";
import { ButtonRemoveContainer } from "../../Styles/ComponentsStyle/ButtonRemove";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {
  Card,
  CardGroup,
  ButtonMoreInfo,
} from "../../Styles/ComponentsStyle/CardRender";
import { useHistory } from "react-router";

import { useContext } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { GoalsContext } from "../../Providers/goals";
import { ActivitiesContext } from "../../Providers/activities";

const CardRender = ({ listType, item }) => {
  const { deleteHabit } = useContext(UserHabitsContext);
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

  return (
    <>
      {listType === "habit" && (
        <Card>
          <h2>{item.title}</h2>
          <div>Categoria: {item.category}</div>
          <div>Dificuldade: {item.difficulty}</div>
          <div>Frequência: {item.frequency}</div>
          <div className="progressbar">
            Progresso:{" "}
            <Progress percent={item.how_much_achieved} status="success" />
          </div>
          <div>Alcançado</div>
          <ButtonRemoveContainer onClick={handleRemoveHabit}>
            remove
          </ButtonRemoveContainer>
        </Card>
      )}

      {listType === "group" && (
        <CardGroup className="group">
          <div>
            <div>Título: {item.name}</div>
            <div>Descrição: {item.description}</div>
            <div>{item.category}</div>
          </div>
          <div className="buttonContainer">
            <ButtonSubscribe groupId={item.id}>Inscrever-se</ButtonSubscribe>
            <ButtonAbout item={item}>Sobre</ButtonAbout>
          </div>
        </CardGroup>
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
        <Card>
          <h2>{item.title}</h2>
          <div>Data: {item.realization_time}</div>
          <ButtonUpdate>Atualizar</ButtonUpdate>
          <ButtonRemoveContainer onClick={handleRemoveAtivity}>
            Excluir
          </ButtonRemoveContainer>
        </Card>
      )}

      {listType === "goal" && (
        <Card>
          <h2>{item.title}</h2>
          <div>Dificuldade: {item.difficulty}</div>
          <div className="progressbar">
            Progresso:{" "}
            <Progress percent={item.how_much_achieved} status="success" />
          </div>

          <div>Alcançado:</div>
          <ButtonRemoveContainer onClick={handleRemoveGoal}>
            Excluir
          </ButtonRemoveContainer>
        </Card>
      )}
    </>
  );
};

export default CardRender;
