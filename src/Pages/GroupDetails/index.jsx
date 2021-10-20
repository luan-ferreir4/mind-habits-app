import { NavBar } from "../../Components/NavBar";
import { useState, useContext, useEffect } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";

const GroupDetails = () => {
  const [specificGroup, setSpecificGroup] = useState({});
  const { getASpecificGroup } = useContext(GroupsCommunityContext);
  const groupId = localStorage.getItem("groupToRender") || "";

  useEffect(() => {
    setSpecificGroup(getASpecificGroup(115));
  }, []);

  console.log(specificGroup);

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <h2>Equipe MindHabits</h2>
    </>
  );
};

export default GroupDetails;
