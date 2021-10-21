import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);
  const [errorUserGroups, setErrorUserGroups] = useState([]);

  const token = localStorage.getItem("token") || "";

  useEffect( () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
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
  },[token, userGroups]);

  const unsubscribeFromAGroup = (groupId) => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/unsubscribe/`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Exclusão do grupo realizada com sucesso");
      })
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
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          // setErrorUserGroups(`Group ${groupId} ${error.response.data.detail}`);
          setErrorUserGroups(error.response);
        }
      });
  };

  const editGroup = (groupId, payload) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Alteração realizada com sucesso");
      })
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
        unsubscribeFromAGroup,
        
        subscribeToAGroup,
        editGroup,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
