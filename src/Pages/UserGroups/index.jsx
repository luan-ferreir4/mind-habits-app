import { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  UserGroupsContent,
  UserGroupsMain,
  UserGroupsPage,
} from "../../Styles/PagesStyle/UserGroupsPage";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import { UserGroupsContext } from "../../Providers/userGroups";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);
  const history = useHistory();

  return (
    <>
      <NavBar typeNav={"logged"} />
      <UserGroupsPage>
        <UserGroupsMain>

        <div className="sideDock">
            <SideDock />
          </div>

          <UserGroupsContent>
            <h3>Meus Grupos</h3>
            {userGroups.map((group) => (<CardRender listType={"userGroup"} item={group} key={group.id} />))}
          </UserGroupsContent>
          
        </UserGroupsMain>
      </UserGroupsPage>
    </>
  );
};

export default UserGroups;
