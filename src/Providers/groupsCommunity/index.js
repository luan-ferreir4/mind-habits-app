import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GroupsCommunityContext = createContext([]);

export const GroupsCommunityProvider = ({ children }) => {
  const [communityGroups, setCommunityGroups] = useState([]);
  const [groupSelected, setGroupSelected] = useState();

  const token = localStorage.getItem("token") || "";

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
        getGroups();
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
    const newCategoryName = categoryName === undefined ? "" : categoryName;
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        params: { category: `${newCategoryName}` },
      })
      .then((response) => {
        console.log(response.data.results);
        setCommunityGroups(response.data.results);
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

  const getASpecificGroup = (groupId) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`)
      .then((response) => {
        setGroupSelected(response.data);
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

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <GroupsCommunityContext.Provider
      value={{
        communityGroups,
        createGroup,
        getGroups,
        getASpecificGroup,
        groupSelected,
      }}
    >
      {children}
    </GroupsCommunityContext.Provider>
  );
};
