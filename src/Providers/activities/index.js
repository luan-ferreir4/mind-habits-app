import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as moment from "moment";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const [activitiesPage, setActivitiesPage] = useState(1);

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });

  const createActivity = (newActivity, idGroup) => {
    const { title, realization_time } = newActivity;

    axios
      .post(
        "https://kenzie-habits.herokuapp.com/activities/",
        {
          title: title,
          realization_time: moment(realization_time).format(),
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
        toast.success("Atividade criada com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          );
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const deleteActivity = (activityId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/activities/${activityId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Atividade excluida com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          );
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const updateActivity = (activityId, body) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${activityId}/`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        toast.success("Atividade alterada com sucesso.");
      })
      .catch((error) => {
        if (error.response) {
          toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          );
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
        activitiesPage,
        setActivitiesPage,
        updateActivity,
        createActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
