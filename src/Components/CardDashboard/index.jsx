import { useContext, useEffect, useState } from "react";
import { userHabitsContext } from "../../Providers/userHabits";
import { userGroupsContext } from "../../Providers/userHabits";

export const CardDashboard = ({ listType }) => {

  const [content, setContent] = useState("");

  // const { habitsList } = useContext(userHabitsContext);
  // const { grupsList } = useContext(userGroupsContext);

  useEffect(() => {
    listType === "habit" ? setContent("Habitos") : setContent("Grupos");
  },[listType]);

  return (
    <div>
      <h1>{content}</h1>
      <p>Você possui 0 {content}</p>
    </div>
  );
};
