import { NavContainer, Page } from "../../Styles/PagesStyle/GlobalPageStyle";
import {
  DashboardContent,
} from "../../Styles/PagesStyle/DashboardPage";

import { useContext } from "react";

import { LoginContext } from "../../Providers/login";

import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import { CardDashboard } from "../../Components/CardDashboard";

const Dashboard = () => {

  const { userName } = useContext(LoginContext);

  return (
    <>
      <NavBar typeNav="logged" />
      <Page>
        
        <NavContainer>
          <SideDock />
        </NavContainer>

        <DashboardContent>
          <h1>
            Olá, <span>{userName}</span>
          </h1>

          <div className="Card1">
            <p className="cardDescpt card--left">
              Organize seus hábitos e crie metas...
            </p>
            <CardDashboard listType="habit" />
          </div>

          <div className="Card2">
            <p className="cardDescpt card--right">
              ...Compartilhe e contribua com novos hábitos e metas por meio dos
              grupos
            </p>
            <CardDashboard listType="group" />
          </div>
        </DashboardContent>
      </Page>
    </>
  );
};

export default Dashboard;
