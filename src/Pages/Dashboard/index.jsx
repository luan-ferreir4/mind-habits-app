import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import { CardDashboard } from "../../Components/CardDashboard";
import {
  DashboardContent,
  DashboardMain,
  DashboardPage,
  DashboardHeader,
} from "../../Styles/PagesStyle/DashboardPage";

const Dashboard = () => {
  return (
    <DashboardPage>
      <NavBar typeNav="logged" />

      <DashboardMain>
        <SideDock />

        <DashboardContent>
          <h1>Olá, <span>user</span></h1>

          <div className="Card1">
            <p className="cardDescpt card--left">Organize seus hábitos e crie metas...</p>
            <CardDashboard listType="habit" />
          </div>

          <div  className="Card2">
            <p className="cardDescpt card--right">
              ...Compartilhe e contribua com novos hábitos e metas por meio dos
              grupos
            </p>
            <CardDashboard listType="group" />
          </div>

        </DashboardContent>
      </DashboardMain>
    </DashboardPage>
  );
};

export default Dashboard;
