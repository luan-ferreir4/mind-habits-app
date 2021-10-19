import { LoginProvider } from "./login";
import { RegisterProvider } from "./register";

import { UserProvider } from "./user";
import { GroupsCommunityProvider } from "./groupsCommunity";
import { UserGroupsProvider } from "./userGroups";
import { UserHabitsProvider } from "./userHabits";
import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./goals";

const ProvidersGathered = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <UserProvider>
          <GroupsCommunityProvider>
            <UserGroupsProvider>
              <UserHabitsProvider>
                <ActivitiesProvider>
                  <GoalsProvider>
                    {children}
                  </GoalsProvider>
                </ActivitiesProvider>
              </UserHabitsProvider>
            </UserGroupsProvider>
          </GroupsCommunityProvider>
        </UserProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default ProvidersGathered;
