import { NavBar } from "../../Components/NavBar";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import CardRender from "../../Components/CardRender";
import { CardAbout } from "../../Components/CardAbout";
import { LoginContext } from "../../Providers/login";
import { ButtonCreate } from "../../Components/Button-Create";
import {
  Container,
  ButtonToggle,
  TopContainer,
} from "../../Styles/PagesStyle/GroupDetailsPage";

const GroupDetails = () => {
  const groupId = localStorage.getItem("groupToRender") || "";
  const { getASpecificGroup, groupSelected } = useContext(
    GroupsCommunityContext
  );
  const [pageSelect, setPageSelect] = useState({});
  useState(() => {
    getASpecificGroup(groupId);
  }, []);

  const handleSelectGoals = () => {
    setPageSelect("goal");
  };
  const { auth, handleLogin } = useContext(LoginContext);
  const handleSelectActivities = () => {
    setPageSelect("activity");
  };

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavBar typeNav={"logged"} />
      <TopContainer>
        <h1>Grupo {groupSelected?.name}</h1>
        <h2>Atividades e metas</h2>
        {groupSelected !== undefined && (
          <CardAbout groupSpecific={groupSelected}></CardAbout>
        )}
      </TopContainer>

      <Container>
        <div className="buttonContainer-render">
          <ButtonToggle onClick={handleSelectActivities}>
            Ver Atividades
          </ButtonToggle>
          <ButtonToggle onClick={handleSelectGoals}>Ver Metas</ButtonToggle>

          {pageSelect === "activity" && (
            <div className="buttonContainer-ativity">
              <ButtonCreate listType="activity">Criar Atividade</ButtonCreate>
            </div>
          )}
          {pageSelect === "goal" && (
            <div className="buttonContainer-goal">
              <ButtonCreate listType="goal">Criar Meta</ButtonCreate>
            </div>
          )}
        </div>
        <div className="listContainer">
          {pageSelect === "activity" &&
            groupSelected.activities.map((item) => (
              <CardRender
                listType="activitie"
                item={item}
                key={item.id}
              ></CardRender>
            ))}

          {pageSelect === "goal" &&
            groupSelected.goals.map((item) => (
              <CardRender
                listType="goal"
                item={item}
                key={item.id}
              ></CardRender>
            ))}
        </div>
      </Container>
    </>
  );
};

export default GroupDetails;
