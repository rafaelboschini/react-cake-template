import { ThemeProvider } from "../../contexts/CustomThemeProvider";
import Routes from "../../routes/Routes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
