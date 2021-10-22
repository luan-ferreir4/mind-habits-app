import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../user";
export const UserHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const [habitsList, setHabitsList] = useState([]);
  const [notRenderd, setNotRenderd] = useState(false);
  const { userId } = useContext(UserContext);

  // const token = localStorage.getItem("token") || "";
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHabitsList(res.data);
      })
      .catch((err) => {
        console.log(err.messages);
        setNotRenderd(true);
      });
  }, [token, habitsList]);

  // console.log(notRenderd);

  const createHabit = (newHabit) => {
    console.log("newHabit", newHabit);
    const { title, category, difficulty, frequencyPartOne, frequencyPartTwo } =
      newHabit;

    axios.post(
      "https://kenzie-habits.herokuapp.com/habits/",
      {
        title: title,
        category: category,
        difficulty: difficulty,
        frequency: `${frequencyPartOne} por ${frequencyPartTwo}`,
        achieved: false,
        how_much_achieved: 0,
        user: userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const updateHabit = (habitId, data) => {
    axios.patch(
      `https://kenzie-habits.herokuapp.com/habits/${habitId}/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      }
    );
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
