import CardRender from "../../Components/CardRender";
import { CardAbout } from "../../Components/CardAbout";
import { LoginContext } from "../../Providers/login";
import { ButtonCreate } from "../../Components/Button-Create";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";

import {
  ButtonToggle,
  GroupDetailsContent,
  GroupDetailsPage,
  GroupDetailsMain,
} from "../../Styles/PagesStyle/GroupDetailsPage";

import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { ActivitiesContext } from "../../Providers/activities";
import { GoalsContext } from "../../Providers/goals";

import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import toast from "react-hot-toast";
import { useParams } from "react-router";

const GroupDetails = () => {
  const params = useParams();

  const { auth } = useContext(LoginContext);

  const { getASpecificGroup, groupSelected } = useContext(
    GroupsCommunityContext
  );

  const { goals, setGoals, goalsPage, setGoalsPage } = useContext(GoalsContext);

  const { activities, setActivities, activitiesPage, setActivitiesPage } =
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

  if (!auth) {
    return <Redirect to="/login" />;
  }

  const handleSelectGoals = () => {
    setPageSelect("goal");
  };

  const handleSelectActivities = () => {
    setPageSelect("activity");
  };

  //  const nextActivitiesPage = () => {
  //    if (activitiesPage !== null) {
  //      setActivitiesPage(activitiesPage + 1);
  //    }
  //  };
  //  const prevActivitiesPage = () => {
  //    if (activitiesPage > 1) {
  //      setActivitiesPage(activitiesPage + 1);
  //    }
  //  };
  //  const nextGoalsPage = () => {
  //   if (goalsPage !== null) {
  //     setGoalsPage(goalsPage + 1);
  //   }
  // };
  // const prevGoalsPage = () => {
  //   if (goalsPage > 1) {
  //     setGoalsPage(goalsPage + 1);
  //   }
  // };

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

                <div className="listContainer">
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
                </div>
              </div>
            </GroupDetailsContent>
          )}
        </GroupDetailsMain>
      </GroupDetailsPage>
    </>
  );
};

export default GroupDetails;
