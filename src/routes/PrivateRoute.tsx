import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import { darkTheme } from "../theme";

function Dashboard() {
  return <div>Dashboard</div>;
}

function PrivateRoute() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateLayout theme={darkTheme}>
            <Dashboard />
          </PrivateLayout>
        }
      />
    </Routes>
  );
}

export default PrivateRoute;
