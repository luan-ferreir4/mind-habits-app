import { useContext, useEffect, useState } from "react";
import { UserHabitsContext } from "../../Providers/userHabits";
import { UserGroupsContext } from "../../Providers/userGroups";
import { CardContainer } from "../../Styles/ComponentsStyle/CardDashboard";

export const CardDashboard = ({ listType }) => {
  const [content, setContent] = useState("");
  const [listQuantity, setListQuantity] = useState(0);

  const { habitsList } = useContext(UserHabitsContext);
  
  const { userGroups } = useContext(UserGroupsContext);

  console.log(habitsList);
  console.log(userGroups);

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
      <h1>{content}</h1>
      <p>
        Você possui {listQuantity} {content}
      </p>
      {listType === "habit" ? (
        <p>Cadastre um novo hábito agora mesmo!</p>
      ) : (
        <p>Procure grupos para se cadastrar!</p>
      )
      }
    </CardContainer>
  );
};
