import { RegisterProvider } from "./register";
import { LoginProvider } from "./login";

import { UserProvider } from "./user";
import { UserHabitsProvider } from "./userHabits";

import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";

const ProvidersGathered = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <UserProvider>
          <UserHabitsProvider>
            <ActivitiesProvider>
              <GoalsProvider>
                {children}
              </GoalsProvider>
            </ActivitiesProvider>
          </UserHabitsProvider>
        </UserProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default ProvidersGathered;
