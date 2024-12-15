import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin, Home } from "@pages/index";
import Layout from "@layouts/Layout";
import { lightTheme } from "../theme";

function PublicRoute() {
  const theme = lightTheme;

  return (
    <Routes>
      <Route
        element={
          <Layout theme={theme}>
            <Home />
          </Layout>
        }
        path="/"
      />
      ;
      <Route
        element={
          <Layout theme={theme}>
            <Signin />
          </Layout>
        }
        path="/Login"
      />
      ;
    </Routes>
  );
}

export default PublicRoute;
