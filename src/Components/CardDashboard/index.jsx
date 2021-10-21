import { useContext, useEffect, useState } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { UserGroupsContext } from "../../Providers/userGroups";
import { CardContainer } from "../../Styles/ComponentsStyle/CardDashboard";
import { Link } from "react-router-dom";

export const CardDashboard = ({ listType }) => {
  const [content, setContent] = useState("");
  const [listQuantity, setListQuantity] = useState(0);

  const { habitsList } = useContext(UserHabitsContext);
  
  const { userGroups } = useContext(UserGroupsContext);

  useEffect(() => {
    if (listType === "habit") {
      setContent("Habitos");
      setListQuantity(habitsList.length);
    } 
    else if (listType === "group") {
      setContent("Grupos");
      setListQuantity(userGroups.length);
    }
  }, [listType, habitsList.length, userGroups.length]);

  return (
    <CardContainer>
      <h3>{content}</h3>
      <p>
        Você possui {listQuantity} {content}
      </p>
      {listType === "habit" ? (
        <p><Link to="/userhabits">Cadastre um novo hábito agora mesmo!</Link></p>
      ) : (
        <p><Link to="/usergroups">Procure grupos para se cadastrar!</Link></p>
      )
      }
    </CardContainer>
  );
};
