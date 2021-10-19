import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", { headers: { Authorization: `Bearer ${token}`}})
      .then((res) => {
        console.log(res);
        setHabitsList(res);
      })
      .catch((err) => console.log(err));
  },[habitsList, token]);

  const createHabit = (newHabit) => {
    axios.post("https://kenzie-habits.herokuapp.com/habits/", newHabit, { headers: { Authorization: `Bearer ${token}` } });
  };

  const updateHabit = (habitId) => {
    axios.patch(`https://kenzie-habits.herokuapp.com/habits/${habitId}`, { headers: { Authorization: `Bearer ${token}` } } )
  }

  const removeFromHabits = (habitId) => {
    axios.delete(`https://kenzie-habits.herokuapp.com/habits/${habitId}`, { headers: { Authorization: `Bearer ${token}` }});
  };

  return (
    <UserHabitsContext.Provider
      value={{ habitsList, createHabit, updateHabit, removeFromHabits }}
    >
      {children}
    </UserHabitsContext.Provider>
  );
};
