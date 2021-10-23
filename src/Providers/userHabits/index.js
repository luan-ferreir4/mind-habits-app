import axios from "axios";
import toast from "react-hot-toast";

import { UserContext } from "../user";
import { createContext, useContext, useEffect, useState } from "react";

export const UserHabitsContext = createContext();

export const UserHabitsProvider = ({ children }) => {
  const { userId } = useContext(UserContext);

  const [habitsList, setHabitsList] = useState([]);
  const [notRenderd, setNotRenderd] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
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
    }
  }, [token, habitsList]);

  const createHabit = (newHabit) => {
    const { title, category, difficulty, frequencyPartOne, frequencyPartTwo } =
      newHabit;

    axios
      .post(
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
      )
      .then((res) => {
        toast.success("Hábito criado");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(
            `Goals: ${err.response.status} ${err.response.statusText}`
          );
        } else {
          toast.error("Error", err.message);
        }
      });
  };

  const updateHabit = (habitId, progress, isAchieved) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/habits/${habitId}/`,
        { how_much_achieved: progress, achieved: isAchieved },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        if (err.response) {
          toast.error(
            `Goals: ${err.response.status} ${err.response.statusText}`
          );
        } else {
          toast.error("Error", err.message);
        }
      });
  };

  const deleteHabit = (habitId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(toast.success("Hábito deletado"));
  };

  return (
    <UserHabitsContext.Provider
      value={{
        habitsList,
        notRenderd,
        createHabit,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </UserHabitsContext.Provider>
  );
};
