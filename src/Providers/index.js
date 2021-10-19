import { RegisterProvider } from "./register";
import { LoginProvider } from "./login";

import { UserProvider } from "./user";
import { UserHabitsProvider } from "./userHabits";
import { GroupsCommunityProvider } from "./groupsCommunity";
import { UserGroupsProvider } from "./groupsCommunity";

import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";

const ProvidersGathered = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <GroupsCommunityProvider>
          <UserProvider>
            <UserGroupsProvider>
              <UserHabitsProvider>
                <ActivitiesProvider>
                  <GoalsProvider>
                    {children}
                  </GoalsProvider>
                </ActivitiesProvider>
              </UserHabitsProvider>
            </UserGroupsProvider>
          </UserProvider>
        </GroupsCommunityProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default ProvidersGathered;
