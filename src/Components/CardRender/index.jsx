import { ButtonSubscribe } from "../ButtonSubscribe";
import { ButtonAbout } from "../ButtonAbout";
import { ButtonUpdate } from "../Button-Update";
import { ButtonRemoveContainer } from "../../Styles/ComponentsStyle/ButtonRemove";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import { useHistory } from "react-router";
import { useContext } from "react";
import { Card, CardGroup } from "../../Styles/ComponentsStyle/CardRender";

import { UserHabitsContext } from "../../Providers/userHabits";
import { GoalsContext } from "../../Providers/goals";
import { ActivitiesContext } from "../../Providers/activities";

const CardRender = ({ listType, item }) => {
  const { deleteHabit } = useContext(UserHabitsContext);
  const { deleteGoal } = useContext(GoalsContext);
  const { deleteActivity } = useContext(ActivitiesContext);

  const history = useHistory("");

  const handlePushToGroup = () => {
    localStorage.removeItem("groupToRender" || "");
    localStorage.setItem("groupToRender", JSON.stringify(item.id));
    history.push("/groupdetails/");
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

      {/* {
  "id": 1724,
  "title": "Calistenia a tarde (15 minutos)",
  "category": "Sáude",ya
  "difficulty": "Muito díficil",
  "frequency": "Diária",
  "achieved": false,
  "how_much_achieved": 30,
  "user": 657
} */}

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

      {/* {
        "id": 11,
        "name": "GAT - Grupo de apoio ao tabagista",
        "description": "Grupo de prevenção e encorajamento ao tratamento do tabagismo.",
        "category": "Saúde",
        "creator": {
        "id": 1,
        "username": "monica",
        "email": "monica@mail.com"
    } */}

      {listType === "userGroup" && (
        <CardGroup>
          <div>
            <div>Título: {item.name}</div>
            <div>Descrição: {item.description}</div>
            <div>{item.category}</div>
          </div>
          <div className="buttonContainer">
            <button onClick={handlePushToGroup}>Ver mais</button>
          </div>
        </CardGroup>
      )}

      {/* {
        "id": 1724,
        "title": "Calistenia a tarde (15 minutos)",
        "category": "Sáude",
        "difficulty": "Muito díficil",
        "frequency": "Diária",
        "achieved": false,
        "how_much_achieved": 30,
        "user": 657
        } */}
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

      {/* {
        "id": 1047,
        "title": "tiro ao alvo",
        "realization_time": "2021-03-10T15:00:00Z",
        "group": 794
        } */}

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

      {/* {
        "id": 957,
        "title": "Ler varios livros",
        "difficulty": "Fácil",
        "achieved": false,
        "how_much_achieved": 100,
        "group": 11
      } */}
    </>
  );
};

export default CardRender;
