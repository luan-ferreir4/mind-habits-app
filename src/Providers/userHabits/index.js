import axios from "axios";
import { createContext, useState } from "react";

export const UserHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const token = localStorage.getItem("token") || "";

  const getHabits = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((res) => {
        // console.log(res.data);
        setHabitsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createHabit = (newHabit) => {
    axios.post("https://kenzie-habits.herokuapp.com/habits/", newHabit, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
  };

  const updateHabit = (habitId, data) => {
    axios.patch(`https://kenzie-habits.herokuapp.com/habits/${habitId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
  };

  const deleteHabit = (habitId) => {
    axios.delete(`https://kenzie-habits.herokuapp.com/habits/${habitId}`, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    });
  };

  return (
    <UserHabitsContext.Provider
      value={{ habitsList, getHabits, createHabit, updateHabit, deleteHabit }}
    >
      {children}
    </UserHabitsContext.Provider>
  );
};
