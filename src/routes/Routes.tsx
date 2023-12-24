import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function Routes() {
  return (
    <BrowserRouter>
      <PrivateRoute />
      <PublicRoute />
    </BrowserRouter>
  );
}

export default Routes;
