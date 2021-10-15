import { Switch, Route } from "react-router";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import UserHabits from "../Pages/UserHabits"
import UserGroups from "../Pages/UserGroups"
import GroupsCommunity from "../Pages/GroupsCommunity";
import GroupDetails from "../Pages/GroupDetails";
import AboutUs from "../Pages/AboutUs"

const RoutesPaths = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>

            <Route path="/login">
                <Login/>
            </Route>

            <Route path="/dashboard">
                <Dashboard/>
            </Route>

            <Route path="/userhabits">
                <UserHabits/>
            </Route>
            
            <Route path="/usergroups">
                <UserGroups/>
            </Route>

            <Route path="/groupscommunity">
                <GroupsCommunity/>
            </Route>

            <Route path="/groupdetails">
                <GroupDetails/>
            </Route>

            <Route path="/aboutUs">
                <AboutUs/>
            </Route>
        </Switch>
    )
}

export default RoutesPaths;