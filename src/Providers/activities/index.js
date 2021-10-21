import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import * as moment from "moment";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  // const token = localStorage.getItem("token") || "";

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });

  const [goToPage, setGoToPage] = useState(1);
  const [isThereNext, setIsThereNext] = useState(null);

  const getGroupActivities = (group) => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/activities/?group=${group}&page=${goToPage}`
      )
      .then((response) => {
        setActivities(response.data.results);
        setIsThereNext(response.data.next);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  // useEffect(
  //   () =>{
  //     if(next){
  //       fetch(next)
  //         .then((response) => response.json())
  //         .then((response) => {
  //           setCharacters([...characters, ...response.results]);

  //           setNext(response.info.next);
  //           setTotalPages(response.info.pages);
  //         })
  //         .catch((err) => console.log(err))
  //     }
  //   },
  //   [next]
  // );

  const GoToNextPage = () => {
    if (isThereNext !== null) {
      setGoToPage(goToPage + 1);
    }
  };
  const GoToPreviewPage = () => {
    if (goToPage > 1) {
      setGoToPage(goToPage - 1);
    }
  };

  const createActivity = (newActivity, idGroup) => {
    const { title, realization_time } = newActivity;

    axios
      .post(
        "https://kenzie-habits.herokuapp.com/activities/",
        {
          title: title,
          // realization_time: moment().format(JSON.stringify(realization_time)),
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
        console.log(response);
        toast.success("Atividade criada com sucesso.");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Error", error.message);
        }
      });
  };

  const deleteActivity = (activityId) => {
    console.log(activityId);
    axios
      .delete(`https://kenzie-habits.herokuapp.com/activities/${activityId}/`, {
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
        `https://kenzie-habits.herokuapp.com/activities/${activityId}/`,
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

  // useEffect(() => {
  //   getGroupActivities();
  // }, [goToPage]);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        updateActivity,
        getGroupActivities,
        createActivity,
        deleteActivity,
        GoToNextPage,
        GoToPreviewPage,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
