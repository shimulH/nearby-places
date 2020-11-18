import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import LogRocket from "logrocket";
import { store } from "./store";
import theme from "./theme";
import Route from "./routes";
LogRocket.init("zfb2gl/locate-restaurant");

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
