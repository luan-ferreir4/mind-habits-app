import { Switch, Route } from "react-router";
import GlobalStyles from "../Styles/GlobalStyles";

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
                <GlobalStyles/>
                <Home/>
            </Route>

            <Route path="/register">
            <GlobalStyles/>
                <Register/>
            </Route>

            <Route path="/login">
            <GlobalStyles/>
                <Login/>
            </Route>

            <Route path="/dashboard">
            <GlobalStyles/>
                <Dashboard/>
            </Route>

            <Route path="/userhabits">
            <GlobalStyles/>
                <UserHabits/>
            </Route>
            
            <Route path="/usergroups">
            <GlobalStyles/>
                <UserGroups/>
            </Route>

            <Route path="/groupscommunity">
            <GlobalStyles/>
                <GroupsCommunity/>
            </Route>

            <Route path="/groupdetails">
            <GlobalStyles/>
                <GroupDetails/>
            </Route>

            <Route path="/aboutUs">
            <GlobalStyles/>
                <AboutUs/>
            </Route>
        </Switch>
    )
}

export default RoutesPaths;