import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../user"
export const UserHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);
  const [notRenderd, setNotRenderd] = useState(false);
  const { userId } = useContext(UserContext)

  const token = localStorage.getItem("token") || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM1MjE5NTkxLCJqdGkiOiI2ZTgwNDAxNGVkMDk0MjVkOWUxMDBjMjhhYjczMjc4ZCIsInVzZXJfaWQiOjQwMH0.B3Mp3hfsWQMmJtVu90TA-vjLL8ioo8MUE9b2rZGsKyM";

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
      .then((res) => {
        console.log(res);
        setHabitsList(res.data);
      })
      .catch((err) => {
        console.log(err.messages);
        setNotRenderd(true);
      });
  },[token, habitsList]);
  
console.log(notRenderd)
  const createHabit = (newHabit) => {
    axios.post("https://kenzie-habits.herokuapp.com/habits/", {...newHabit, user: userId}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
  };

  const updateHabit = (habitId, data) => {
    axios.patch(`https://kenzie-habits.herokuapp.com/habits/${habitId}/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
  };

  const deleteHabit = (habitId) => {
    axios.delete(`https://kenzie-habits.herokuapp.com/habits/${habitId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <UserHabitsContext.Provider
      value={{ habitsList, notRenderd, createHabit, updateHabit, deleteHabit }}
    >
      {children}
    </UserHabitsContext.Provider>
  );
};

