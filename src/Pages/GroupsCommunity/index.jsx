import {
  GComPage,
  GComMain,
  GComContent,
  ButtonPageOne,
  ButtonPageTwo,
} from "../../Styles/PagesStyle/GroupsComunnityPage";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { LoginContext } from "../../Providers/login";
import { Redirect } from "react-router";
import { NavContainer } from "../../Styles/PagesStyle/GlobalPageStyle";

const GroupsCommunity = () => {
  const { communityGroups, goToNextPage, goToPreviousPage, searchGroups } = useContext(
    GroupsCommunityContext
  );

  const { auth } = useContext(LoginContext);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavBar typeNav={"logged"} />
      <GComPage>
        <GComMain>
          
          <NavContainer>
            <SideDock />
          </NavContainer>

          <GComContent>
            <h1>Groups Community</h1>
            <div className="btnCreate">
              <ButtonCreate listType="group" />
            </div>
            <div className="divCards">
              {communityGroups.map((item) => (
                <CardRender listType={"group"} item={item} />
              ))}
            </div>
            <div className="divButtons">
              <ButtonPageOne onClick={() => goToPreviousPage()}>
                Página anterior
              </ButtonPageOne>
              <br />
              <ButtonPageTwo onClick={() => goToNextPage()}>
                Próxima página
              </ButtonPageTwo>
            </div>
          </GComContent>
        </GComMain>
      </GComPage>
    </>
  );
};

export default GroupsCommunity;

