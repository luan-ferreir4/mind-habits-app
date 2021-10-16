import { useContext } from "react";
import { userContext } from "../user";

import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const userHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);

  const { token } = useContext(userContext);

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
    <userHabitsContext.Provider
      value={{ habitsList, createHabit, updateHabit, removeFromHabits }}
    >
      {children}
    </userHabitsContext.Provider>
  );
};
