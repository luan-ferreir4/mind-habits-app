import { RegisterContext } from "./register";
import { LoginContext } from "./login";
import { UserHabits } from "./userHabits";
import { ActivitiesContext } from "./activities";

const ProvidersGathered = ({ children }) => {
  return (
    <RegisterContext>
      <LoginContext>
        <UserHabits>
          <ActivitiesContext>{children}</ActivitiesContext>
        </UserHabits>
      </LoginContext>
    </RegisterContext>
  );
};

export default ProvidersGathered;
