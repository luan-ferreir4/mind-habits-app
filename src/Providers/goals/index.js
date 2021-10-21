import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  // const token = localStorage.getItem("token") || "";

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });

  const [groupIdGoal, setGroupIdGoal] = useState("");
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(
    `https://kenzie-habits.herokuapp.com/goals/?group=${groupIdGoal}&page=${page}`
  );
  console.log("next do goal", next);
  // const getGroupGoals = (group, page) => {
  //   axios
  //     .get(
  //       `https://kenzie-habits.herokuapp.com/goals/?group=${group}&page=${page}`
  //     )
  //     .then((response) => setGoals(response.data.results))
  //     .catch((error) => {
  //       if (error.response) {
  //         toast.error(error.response.data.message);
  //       } else {
  //         toast.error("Error", error.message);
  //       }
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       setHabitsList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.messages);
  //       setNotRenderd(true);
  //     });
  // }, [token, habitsList]);

  useEffect(() => {
    if (next) {
      axios
        .get(next)
        .then((response) => {
          console.log("response no goals", response.data.results);
          setGoals([...goals, ...response.data.results]);

          setNext(response.info.next);
          // setTotalPages(response.info.pages);
        })
        .catch((error) => {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Error", error.message);
          }
        });
    }
  }, [next]);

  const createGoal = (newGoal, idGroup) => {
    console.log("new goal", newGoal);

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
        headers: { Authorization: `Bearer ${token}` },
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
        // getGroupGoals,
        createGoal,
        deleteGoal,
        updateGoal,
        setGroupIdGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
