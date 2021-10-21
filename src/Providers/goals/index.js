import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const token = localStorage.getItem("token") || "";

  const getGroupGoals = (group, page) => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/goals/?group=${group}&page=${page}`
      )
      .then((response) => setGoals(response.data.results))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const createGoal = (newGoal) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/goals/", newGoal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
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
      .delete(`https://kenzie-habits.herokuapp.com/goals/${goalId}`, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((response) => {
        toast.success("Meta excluida com sucesso.");
        console.log(response);
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
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((response) => {
        toast.success("Meta alterada com sucesso.");
        console.log(response);
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
        getGroupGoals,
        createGoal,
        deleteGoal,
        updateGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
