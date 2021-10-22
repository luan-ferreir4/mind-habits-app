import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [goalsPage, setGoalsPage] = useState(1);

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });


  const createGoal = (newGoal, idGroup) => {
    const { title, difficulty, how_much_achieved } = newGoal;

    axios
      .post(
        "https://kenzie-habits.herokuapp.com/goals/",
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: how_much_achieved,
          group: idGroup,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Meta criada com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const deleteGoal = (goalId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Meta excluida com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const updateGoal = (goalId, body) => {
    axios
      .patch(`https://kenzie-habits.herokuapp.com/goals/${goalId}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Meta alterada com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoals,
        goalsPage,
        setGoalsPage,
        createGoal,
        deleteGoal,
        updateGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
