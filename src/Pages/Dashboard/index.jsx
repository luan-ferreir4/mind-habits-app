import {
  DashboardContent,
  DashboardMain,
  DashboardPage,
} from "../../Styles/PagesStyle/DashboardPage";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Providers/user";

import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import { CardDashboard } from "../../Components/CardDashboard";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  const { userId } = useContext(UserContext);

  console.log(userId);

  useEffect(() => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${userId}/`)
      .then((res) => setUserName(res.data.username))
      .catch((err) => console.log(err.message));
  });

  return (
    <>
      <NavBar typeNav="logged" />
      <DashboardPage>
        <DashboardMain>
          <SideDock />

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
                ...Compartilhe e contribua com novos hábitos e metas por meio
                dos grupos
              </p>
              <CardDashboard listType="group" />
            </div>
          </DashboardContent>
        </DashboardMain>
      </DashboardPage>
    </>
  );
};

export default Dashboard;
