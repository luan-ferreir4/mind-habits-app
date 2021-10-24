import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const GroupsCommunityContext = createContext([]);

export const GroupsCommunityProvider = ({ children }) => {
  const [communityGroups, setCommunityGroups] = useState([]);
  const [groupSelected, setGroupSelected] = useState();

  const [isThereNext, setIsThereNext] = useState(
    "https://kenzie-habits.herokuapp.com/groups/"
  );
  const [isTherePrevious, setIsTherePrevious] = useState(null);

  const token = JSON.parse(localStorage.getItem("token"));

  /** Get first 15 community groups */
  useEffect(() => {
    if (token) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/groups/`)
        .then((response) => {
          setCommunityGroups(response.data.results);
          setIsThereNext(response.data.next);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    }
  }, [token, setCommunityGroups]);

  const goToNextPage = () => {
    console.log(isThereNext);
    if (isThereNext) {
      axios
        .get(isThereNext)
        .then((response) => {
          setIsThereNext(response.data.next);
          setIsTherePrevious(response.data.previous);
          setCommunityGroups(response.data.results);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    }
  };

  const goToPreviousPage = () => {
    console.log(isTherePrevious);
    if (isTherePrevious) {
      axios
        .get(isTherePrevious)
        .then((response) => {
          setIsTherePrevious(response.data.previous);
          setIsThereNext(response.data.next);
          setCommunityGroups(response.data.results);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    }
  };

  const searchGroups = (category) => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
        params: { category: `${category}` },
      })
      .then((response) => {
        console.log("Grupos filtrados por categoria", response.data.results);
        setCommunityGroups(response.data.results);
        setIsThereNext(response.data.next);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };

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

  const getASpecificGroup = (groupId) => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`)
      .then((response) => {
        setGroupSelected(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <GroupsCommunityContext.Provider
      value={{
        communityGroups,
        createGroup,
        getASpecificGroup,
        groupSelected,
        goToNextPage,
        goToPreviousPage,
        searchGroups,
      }}
    >
      {children}
    </GroupsCommunityContext.Provider>
  );
};

