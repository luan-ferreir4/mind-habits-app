import { NavBar } from "../../Components/NavBar";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import CardRender from "../../Components/CardRender";
import { CardAbout } from "../../Components/CardAbout";
import { LoginContext } from "../../Providers/login";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import {
  Container,
  ButtonToggle,
  TopContainer,
  GroupDetailsContent,
  GroupDetailsPage,
  GroupDetailsMain,
} from "../../Styles/PagesStyle/GroupDetailsPage";

import { useParams } from "react-router";

const GroupDetails = () => {
  const params = useParams();
  const { getASpecificGroup, groupSelected } = useContext(
    GroupsCommunityContext
  );
  const { auth, handleLogin } = useContext(LoginContext);
  const [pageSelect, setPageSelect] = useState({});
  useState(() => {
    getASpecificGroup(params.id);
  }, []);

  const handleSelectGoals = () => {
    setPageSelect("goal");
  };

  const handleSelectActivities = () => {
    setPageSelect("activity");
  };

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavBar typeNav={"logged"} />
      <GroupDetailsPage>
        <GroupDetailsMain>
          <SideDock />
          {groupSelected !== undefined && (
            <GroupDetailsContent>
              <h1>Grupo {groupSelected?.name}</h1>

              <span className="subtitle">Atividades e metas</span>

              <div className="about">
                <CardAbout
                  className="mid"
                  groupSpecific={groupSelected}
                ></CardAbout>
              </div>
              <div>
                <div className="buttonToggleContainer">
                  <ButtonToggle onClick={handleSelectActivities}>
                    Ver Atividades
                  </ButtonToggle>
                  <ButtonToggle onClick={handleSelectGoals}>
                    Ver Metas
                  </ButtonToggle>
                </div>

                <div className="ButtonCreateContainer">
                  {pageSelect === "activity" && (
                    <div className="buttonContainer-ativity">
                      <ButtonCreate listType="activity">
                        Criar Atividade
                      </ButtonCreate>
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
                        listType="activity"
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
              </div>
            </GroupDetailsContent>
          )}
        </GroupDetailsMain>
      </GroupDetailsPage>
      {/*  */}
    </>
  );
};

export default GroupDetails;
