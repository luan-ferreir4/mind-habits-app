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

const GroupsCommunity = () => {
  const { communityGroups, GoToNextPage, GoToPreviewPage } = useContext(
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
          <div className="sideDock">
            <SideDock />
          </div>
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
              <ButtonPageOne onClick={() => GoToPreviewPage()}>
                Página anterior
              </ButtonPageOne>
              <br />
              <ButtonPageTwo onClick={() => GoToNextPage()}>
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
