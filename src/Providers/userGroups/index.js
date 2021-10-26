import axios from "axios";
import toast from "react-hot-toast";

import { createContext, useEffect, useState } from "react";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);
  const [errorUserGroups, setErrorUserGroups] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios
        .get("https://kenzie-habits.herokuapp.com/groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserGroups(response.data);
        })
        .catch((error) => {
          if (error.response) {
            setErrorUserGroups(error.response);
          }
        });
    }
  }, [token, userGroups]);

  const unsubscribeFromAGroup = (groupId) => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/unsubscribe/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(toast.success("Exclusão do grupo realizada com sucesso"))
      .catch((error) => {
        if (error.response) {
          setErrorUserGroups(error.response);
        }
      });
  };

  const subscribeToAGroup = (groupId) => {
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/subscribe/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (error.response.data.message === "User already on group") {
          setErrorUserGroups(error.response);
        } else {
        }
      });
  };

  const editGroup = (groupId, data) => {
    axios
      .patch(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(toast.success("Alteração realizada com sucesso"))
      .catch((error) => {
        if (error.response) {
          setErrorUserGroups(error.response);
        }
      });
  };

  return (
    <UserGroupsContext.Provider
      value={{
        userGroups,
        errorUserGroups,
        subscribeToAGroup,
        editGroup,
        unsubscribeFromAGroup,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
