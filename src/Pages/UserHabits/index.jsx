import { useContext } from "react";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import { UserHabitsContext } from "../../Providers/userHabits";

const UserHabits = () => {

  const { habitsList } = useContext(UserHabitsContext);
  console.log(habitsList)
  return(
    <div>
        <NavBar typeNav="logged"/>
        <div>
            <SideDock/>
            <div>
                <h1>Meus Hábitos</h1>
            </div>
        </div>
    </div> 
  ) 
};

export default UserHabits;
