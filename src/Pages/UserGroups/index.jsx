import { useContext } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";
import {
  Box,
  Button,
  Grid,
  Card,
  Typography,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);
  const history = useHistory();

  return (
    <Box>
      <Typography variant="h3" component="div">
        Meus Grupos
      </Typography>
      <Grid container spacing={3}>
        {userGroups.map((group) => (
          <Grid item xs={8} key={group.id}>
            <Box>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {group.name}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    {`Descrição: ${group.description}`}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }}>
                    {`Categoria: ${group.category}`}
                  </Typography>
                  <Box>
                    <CardActions>
                      <Button size="medium" color="primary" onClick={() => history.push("/groupdetails")}>
                        Ver mais
                      </Button>
                    </CardActions>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserGroups;