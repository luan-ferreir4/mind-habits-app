import {
  ListContainer,
  NavContainer,
  Page,
  PageContent,
} from "../../Styles/PagesStyle/GlobalPageStyle";

import { useContext } from "react";
import { Redirect } from "react-router";

import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";

import { UserGroupsContext } from "../../Providers/userGroups";
import { LoginContext } from "../../Providers/login";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);

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
            <h1>Meus Grupos</h1>
            <ListContainer>
            {userGroups.map((group) => (
              <CardRender listType={"userGroup"} item={group} key={group.id} />
            ))}
            </ListContainer>
          </PageContent>
      </Page>
    </>
  );
};

export default UserGroups;
