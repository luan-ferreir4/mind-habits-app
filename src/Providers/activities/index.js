import { createContext, useContext } from "react";
import axios from "axios";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";

  const getGroupActivities = (group, page) => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/activities/?group=${group}&page=${page}`
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const getOneActivity = (id) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/activities/${id}/`)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const createActivity = (newActivity) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", newActivity, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const updateActivity = (activityId, body) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${activityId}`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const deleteActivity = (activityId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/activities/${activityId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        getGroupActivities,
        getOneActivity,
        createActivity,
        updateActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
