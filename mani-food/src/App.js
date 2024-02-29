import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
  // <ThemeProvider theme={darkTheme}>
  //   <CssBaseline />
  //   <HomePage />
  // </ThemeProvider>;
}

export default App;
