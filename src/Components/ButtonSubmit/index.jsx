import { Button } from "../../Styles/ComponentsStyle/ButttonSubmit";

import { useContext } from "react";

import { UserHabitsContext } from "../../Providers/userHabits";
import { GroupsCommunityContext } from "../../Providers/groupsCommunity";
import { ActivitiesContext } from "../../Providers/activities"
import { GoalsContext } from "../../Providers/goals";

export const ButtonSubmit = ({ listType, item }) => {

    const { createHabit } = useContext(UserHabitsContext);
    const { createGroup } = useContext(GroupsCommunityContext);
    const { createActivity } = useContext(ActivitiesContext);
    const { createGoal } = useContext(GoalsContext);

    const chooseAction = () => {
        if (listType === "habit") {
            createHabit(item)
        }
        else if (listType === "group" ) {
            createGroup(item)
        }
        else if (listType === "activity" ) {
            createActivity(item)
        }
        else if (listType === "goal" ) {
            createGoal(item)
        }
    }

    return (
        <Button type="submit" onClick={chooseAction}>Criar</Button>
    )
}