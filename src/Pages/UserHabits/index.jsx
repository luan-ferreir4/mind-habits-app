import {
  NavContainer,
  Page,
  PageContent,
} from "../../Styles/PagesStyle/GlobalPageStyle";
import { HabitsListContainer } from "../../Styles/PagesStyle/UserHabitsPages";

import { NavBar } from "../../Components/NavBar";
import { ButtonCreate } from "../../Components/Button-Create";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";

import { UserHabitsContext } from "../../Providers/userHabits";
import { useContext } from "react";

const UserHabits = () => {
  const { habitsList, notRenderd } = useContext(UserHabitsContext);
  return (
    <>
      <NavBar typeNav="logged" />

      <Page>
        <NavContainer>
          <SideDock />
        </NavContainer>

        <PageContent>
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
        </PageContent>
      </Page>
    </>
  );
};

export default UserHabits;
