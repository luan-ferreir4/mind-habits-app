import { useContext } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);
  return <>User Groups</>;
};

export default UserGroups;
