import { UserHabitsPage, HabitsContent, HabitsListContainer } from "../../Styles/PagesStyle/UserHabitsPages";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";

import { UserHabitsContext } from "../../Providers/userHabits";
import { useContext } from "react";

const UserHabits = () => {
  const { habitsList } = useContext(UserHabitsContext);

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
            {habitsList.map((item) => (
              <p>{item.title}</p>
            ))}
          </HabitsListContainer>
        </HabitsContent>
      </UserHabitsPage>
    </>
  );
};

export default UserHabits;
