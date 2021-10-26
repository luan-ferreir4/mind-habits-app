import axios from "axios";
import toast from "react-hot-toast";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import CardRender from "../../Components/CardRender";
import { CardAbout } from "../../Components/CardAbout";
import { ButtonCreate } from "../../Components/Button-Create";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import {
  NavContainer,
  Page,
  PageContent,
} from "../../Styles/PagesStyle/GlobalPageStyle";
import {
  About,
  ButtonToggle,
  ButtonContainer,
  ListContainerDiv,
} from "../../Styles/PagesStyle/GroupDetailsPage";

import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { ActivitiesContext } from "../../Providers/activities";
import { GoalsContext } from "../../Providers/goals";

const GroupDetails = () => {
  const params = useParams();

  const { getASpecificGroup, groupSelected } = useContext(
    GroupsCommunityContext
  );

  const { goals, setGoals, goalsPage } = useContext(GoalsContext);

  const { activities, setActivities, activitiesPage } =
    useContext(ActivitiesContext);

  const [goalsLink, setGoalsLink] = useState(
    `https://kenzie-habits.herokuapp.com/goals/?group=${params.id}&page=${goalsPage}`
  );
  const [activitiesLink, setActivitiesLink] = useState(
    `https://kenzie-habits.herokuapp.com/activities/?group=${params.id}&page=${activitiesPage}`
  );

  const [pageSelect, setPageSelect] = useState({});

  useEffect(() => {
    axios
      .get(goalsLink)
      .then((res) => setGoals(res.data.results))
      .then((res) => setGoalsLink(res.data.next))
      .catch((error) => {
        if (error.response) {
          toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          );
        }
      });
  }, [goalsLink, goals, setGoals]);

  useEffect(() => {
    axios
      .get(activitiesLink)
      .then((res) => setActivities(res.data.results))
      .then((res) => setActivitiesLink(res.data.next))
      .catch((error) => {
        if (error.response) {
          toast.error(
            `Goals: ${error.response.status} ${error.response.statusText}`
          );
        }
      });
  }, [activitiesLink, activities, setActivities]);

  useEffect(() => {
    getASpecificGroup(params.id);
  }, [getASpecificGroup, params.id]);

  const handleSelectGoals = () => {
    setPageSelect("goal");
  };

  const handleSelectActivities = () => {
    setPageSelect("activity");
  };

  return (
    <>
      <NavBar typeNav={"logged"} />

      <Page>
        <NavContainer>
          <SideDock />
        </NavContainer>
        {groupSelected !== undefined && (
          <>
            <PageContent>
              <h1>Grupo {groupSelected?.name}</h1>
              <span className="subtitle">Atividades e metas</span>
              <About>
                <CardAbout
                  className="mid"
                  groupSpecific={groupSelected}
                ></CardAbout>
              </About>
              <div>
                <div className="buttonToggleContainer">
                  <ButtonToggle onClick={handleSelectActivities}>
                    Ver Atividades
                  </ButtonToggle>
                  <ButtonToggle onClick={handleSelectGoals}>
                    Ver Metas
                  </ButtonToggle>
                </div>

                <ButtonContainer>
                  <div className="ButtonCreateContainer">
                    {pageSelect === "activity" && (
                      <div className="buttonContainer-ativity">
                        <ButtonCreate listType="activity" idGroup={params.id}>
                          Criar Atividade
                        </ButtonCreate>
                      </div>
                    )}

                    {pageSelect === "goal" && (
                      <div className="buttonContainer-goal">
                        <ButtonCreate listType="goal" idGroup={params.id}>
                          Criar Meta
                        </ButtonCreate>
                      </div>
                    )}
                  </div>
                </ButtonContainer>
              </div>

              <ListContainerDiv>
                {pageSelect === "activity" &&
                  activities.map((item) => (
                    <CardRender
                      listType="activity"
                      item={item}
                      key={item.id}
                    ></CardRender>
                  ))}

                {pageSelect === "goal" &&
                  goals.map((item) => (
                    <CardRender
                      listType="goal"
                      item={item}
                      key={item.id}
                    ></CardRender>
                  ))}
              </ListContainerDiv>
            </PageContent>
          </>
        )}
      </Page>
    </>
  );
};

export default GroupDetails;
