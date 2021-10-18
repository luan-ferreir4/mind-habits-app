import { createContext, useEffect, useState } from "react";
import axios from "axios";

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
          console.log(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  /** unsubscribeFromAGroup(3) */
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
        console.log(response);
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  /** subscribeToAGroup(3) */
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
        console.log(response.data.message);
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  /** editGroup(113, "Saúde") */
  const editGroup = (groupId, category) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/`,
        { category: category },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
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
        getSubscriptions();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  /** getGroups("saúde") */
  const getGroups = (categoryName) => {
    console.log(categoryName);
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        params: { category: `${categoryName}` },
      })
      .then((response) => console.log(response.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  /** getASpecificGroup(123) */
  const getASpecificGroup = (groupId) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`)
      .then((response) => console.log(response.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

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
