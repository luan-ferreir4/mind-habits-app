import { Button } from "@material-ui/core";
import { useContext } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";

const ButtonSubscribe = (groupId) => {
  const { subscribeToAGroup } = useContext(UserGroupsContext);
  return (
    <Button
      variant="outlined"
      color="success"
      onClick={() => subscribeToAGroup(groupId)}
    >
      Inscrever-se
    </Button>
  );
};

export default ButtonSubscribe;
