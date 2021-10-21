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
          Authorization: `Bearer ${JSON.parse(token)}`,
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

  const [goToPage, setGoToPage] = useState(1);
  const [isThereNext, setIsThereNext] = useState(null);
  const getGroups = (categoryName) => {
    const newCategoryName = categoryName === undefined ? "" : categoryName;
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/groups/?page=${goToPage}&category`,
        {
          params: { category: `${newCategoryName}` },
        }
      )
      .then((response) => {
        console.log(response.data.results);
        setCommunityGroups(response.data.results);
        setIsThereNext(response.data.next);
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
  }, [goToPage]);

  return (
    <GroupsCommunityContext.Provider
      value={{
        communityGroups,
        createGroup,
        getGroups,
        getASpecificGroup,
        groupSelected,
        GoToNextPage,
        GoToPreviewPage,
      }}
    >
      {children}
    </GroupsCommunityContext.Provider>
  );
};
