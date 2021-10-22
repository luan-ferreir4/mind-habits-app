import {
  UserHabitsPage,
  HabitsContent,
  HabitsListContainer,
} from "../../Styles/PagesStyle/UserHabitsPages";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";

import { UserHabitsContext } from "../../Providers/userHabits";
import { useContext } from "react";
import CardRender from "../../Components/CardRender";

const UserHabits = () => {
  const { habitsList, notRenderd } = useContext(UserHabitsContext);
  // console.log(notRenderd)
  return (
    <>
      <NavBar typeNav="logged" />

      <UserHabitsPage>
        <div className="sideDock">
          <SideDock />
        </div>

        <HabitsContent>
          <h1>Meus Hábitos</h1>
          <ButtonCreate listType="habit" />
          
          <HabitsListContainer>
            {notRenderd ? (
              <p>Não foi possivel renderizar a lista</p>
            ) : (
              <>
                {habitsList.map((habit, index) => (
                  <CardRender listType="habit" item={habit} key={index} />
                ))}
              </>
            )}
          </HabitsListContainer>
        </HabitsContent>
      </UserHabitsPage>
    </>
  );
};

export default UserHabits;
