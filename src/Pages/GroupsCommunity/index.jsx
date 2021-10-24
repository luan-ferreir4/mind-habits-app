import { ListContainer, NavContainer, Page ,PageContent } from "../../Styles/PagesStyle/GlobalPageStyle";
import {
  PageNavButtons,
} from "../../Styles/PagesStyle/GroupsComunnityPage";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";

import { useContext } from "react";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { LoginContext } from "../../Providers/login";
import { Redirect } from "react-router";

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
      <Page>
          <NavContainer>
            <SideDock />
          </NavContainer>

          <PageContent>
            <h1>Todos os grupos</h1>
            <div className="btnCreate">
              <ButtonCreate listType="group" />
            </div>

            <PageNavButtons>
              <button className="bttnPrev" onClick={() => goToPreviousPage()}>
                Página anterior
              </button>
              <button className="bttnNext" onClick={() => goToNextPage()}>
                Próxima página
              </button>
            </PageNavButtons>

            <ListContainer>
              {communityGroups.map((item) => (
                <CardRender listType={"group"} item={item} />
              ))}
            </ListContainer>

            <PageNavButtons>
              <button className="bttnPrev" onClick={() => goToPreviousPage()}>
                Página anterior
              </button>
              <button className="bttnNext" onClick={() => goToNextPage()}>
                Próxima página
              </button>
            </PageNavButtons>

          </PageContent>
      </Page>
    </>
  );
};

export default GroupsCommunity;

