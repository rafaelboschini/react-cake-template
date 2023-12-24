import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ThemeProvider } from "../contexts/CustomThemeProvider";

function Routes() {
  return (
    <BrowserRouter>
      <PrivateRoute />
      <PublicRoute />
    </BrowserRouter>
  );
}

export default Routes;
