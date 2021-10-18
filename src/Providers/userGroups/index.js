import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);

  const token = localStorage.getItem("token") || "";

  const getSubscriptions = () => {
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
          toast.error(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
        }
      });
  };

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
      .then((response) => {
        toast.success("Exclusão do grupo realizada com sucesso");
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
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
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          toast.error(`Group ${groupId} ${error.response.data.detail}`);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
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
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Alteração realizada com sucesso");
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
        }
      });
  };

  /** createGroup({
        "name": "Grupo novo 2",
        "description": "Descrição bolada",
        "category": "Saúde"
      }) 
  */
  const createGroup = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/groups/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(response.statusText);
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
        }
      });
  };

  const getGroups = (categoryName) => {
    console.log(categoryName);
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        params: { category: `${categoryName}` },
      })
      .then((response) => console.log(response.data))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
        }
      });
  };

  const getASpecificGroup = (groupId) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`)
      .then((response) => console.log(response.data))
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          toast.error("Error", error.message);
        }
      });
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  console.log(userGroups);

  return (
    <UserGroupsContext.Provider
      value={{
        userGroups,
        unsubscribeFromAGroup,
        getSubscriptions,
        subscribeToAGroup,
        editGroup,
        createGroup,
        getGroups,
        getASpecificGroup,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
