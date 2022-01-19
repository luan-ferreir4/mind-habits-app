import { Switch } from "react-router";
import GlobalStyles from "../Styles/GlobalStyles";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import UserHabits from "../Pages/UserHabits";
import UserGroups from "../Pages/UserGroups";
import GroupsCommunity from "../Pages/GroupsCommunity";
import GroupDetails from "../Pages/GroupDetails";
import AboutUs from "../Pages/AboutUs";
import { Route } from "./Route";

const RoutesPaths = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/dashboard" component={Dashboard} isPrivate={true} />
      <Route path="/userhabits" component={UserHabits} isPrivate={true} />
      <Route path="/usergroups" component={UserGroups} isPrivate={true} />
      <Route
        path="/groupscommunity"
        component={GroupsCommunity}
        isPrivate={true}
      />
      <Route
        path="/groupdetails/:id"
        component={GroupDetails}
        isPrivate={true}
      />
      <Route path="/aboutUs" component={AboutUs} isPrivate={true} />
    </Switch>
  );
};

export default RoutesPaths;
