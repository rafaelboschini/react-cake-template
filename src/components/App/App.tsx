import React from "react";
import { ThemeProvider } from "../../contexts/CustomThemeProvider";
import Routes from "../../routes/Routes";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
