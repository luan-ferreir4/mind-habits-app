import RoutesPaths from "./Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
        }}
      />
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "red",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
        }}
      />
      <RoutesPaths />
    </>
  );
};

export default App;
