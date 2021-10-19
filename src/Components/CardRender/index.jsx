import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Switch from "@mui/material/Switch";

/* import ButtonRemove from "../Button-Remove";
import ButtonUpdate from "../Button-Update";
import ButtonSubscribe from "../ButtonSubscribe";
import ButtonAbout from "../ButtonAbout"; */

import { useContext } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";

const CardRender = ({ listType }) => {
  const { deleteHabit } = useContext(UserHabitsContext);

  const handleHabitRemove = (id) => {
    deleteHabit(id);
  };

  return (
    <>
      {listType === "habit" && (
        <Card>
          <h2>{item.title}</h2>
          <div>Categoria: {item.category}</div>
          <div>Dificuldade: {item.difficulty}</div>
          <div>Frequência: {item.frequency}</div>
          <div>Progresso: {item.how_much_achieved}</div>
          {/* <button onClick={() => handleHabitRemove(item.id)}></button> */}
        </Card>
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

      {listType === "groups" && (
        <Card>
          <div>Título: {item.name}</div>
          <div>Descrição: {item.description}</div>
          <div>{item.category}</div>
        </Card>
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

      {listType === "mygroups" && <Card></Card>}

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
      {listType === "activities" && (
        <Card>
          <h2>{item.title}</h2>
          <label>Data: {item.realization_time}</label>
        </Card>
      )}

      {/* {
        "id": 1047,
        "title": "tiro ao alvo",
        "realization_time": "2021-03-10T15:00:00Z",
        "group": 794
        } */}

      {listType === "goals" && (
        <Card>
          <CardContent>
            <h2>{item.title}</h2>
            <div>Dificuldade: {item.difficulty}</div>
            <div>Progresso: {item.how_much_achieved}</div>
            <div>
              Alcançado: <Switch />
            </div>
          </CardContent>
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
