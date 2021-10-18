import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem("token") || "";

  const getGroupActivities = (group, page) => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/activities/?group=${group}&page=${page}`
      )
      .then((response) => setActivities(response.data.results))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };
  const createActivity = (newActivity) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", newActivity, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Atividade criada com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const deleteActivity = (activityId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/activities/${activityId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Atividade excluida com sucesso.");
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

  const updateActivity = (activityId, body) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${activityId}`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        toast.success("Atividade alterada com sucesso.");
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
    <ActivitiesContext.Provider
      value={{
        activities,
        updateActivity,
        getGroupActivities,
        createActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
