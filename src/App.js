import { UserGroupsProvider } from "./Providers/userGroups";
import RoutesPaths from "./Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <UserGroupsProvider>
        <RoutesPaths />
      </UserGroupsProvider>
    </>
  );
};

export default App;
