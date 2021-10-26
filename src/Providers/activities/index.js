import axios from "axios";
import * as moment from "moment";

import { createContext, useState } from "react";

import { Alerts } from "../../Components/Alerts";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const [activitiesPage, setActivitiesPage] = useState(1);

  const token = JSON.parse(localStorage.getItem("token")) || "";

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
        //toast.success("Atividade criada com sucesso.");
        <Alerts type="success" message="Atividade criada com sucesso." />
      })
      .catch((error) => {
        if (error.response) {
          /** toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          ); */
          <Alerts type="error" message={`Goals: ${error.response.status} ${error.response.statusText}`} />
        } else {
          // toast.error("Error", error.message);
          <Alerts type="error" message={error.message} />
        }
      });
  };

  const deleteActivity = (activityId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/activities/${activityId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        <Alerts type="success" message="Atividade deletada com sucesso." />
      })
      .catch((error) => {
        if (error.response) {
          /** toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          ); */
          <Alerts type="error" message={`Goals: ${error.response.status} ${error.response.statusText}`} />
        } else {
          <Alerts type="error" message={error.message} />
        }
      });
  };

  const updateActivity = (data, id) => {
    const { title, realization_time } = data;

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${id}/`,
        {
          title: title,
          realization_time: realization_time,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        <Alerts type="success" message="Atividade alterada com sucesso." />
      })
      .catch((error) => {
        if (error.response) {
          /** toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          ); */
          <Alerts type="error" message={`Goals: ${error.response.status} ${error.response.statusText}`} />
        } else {
          <Alerts type="error" message={error.message} />
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
