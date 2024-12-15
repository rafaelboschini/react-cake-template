import React from "react";
import Routes from "@routes/Routes";
import { ThemeProvider } from "@contexts/CustomThemeProvider";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
