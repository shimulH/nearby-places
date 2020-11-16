import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import LogRocket from "logrocket";
import { store } from "./store";
import theme from "./theme";
import { Typography } from "@material-ui/core";
LogRocket.init("zfb2gl/locate-restaurant");

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Typography variant="h1">App Locate Restaurent</Typography>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
