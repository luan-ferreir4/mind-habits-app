import { RegisterContext } from "./register"
import { UserHabits } from "./userHabits" 

const ProvidersGathered = ({ children }) => {
    return(
        <RegisterContext>
            <UserHabits>
                { children }
            </UserHabits>
        </RegisterContext>
    )
}

export default ProvidersGathered;