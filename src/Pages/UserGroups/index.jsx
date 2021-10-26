import { useContext } from "react";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import {
  ListContainer,
  NavContainer,
  Page,
  PageContent,
} from "../../Styles/PagesStyle/GlobalPageStyle";

import { UserGroupsContext } from "../../Providers/userGroups";

const UserGroups = () => {

  const { userGroups } = useContext(UserGroupsContext);

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
