import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { store } from "./store";
import theme from "./theme";
import Route from "./routes";
import CustomSnackbar from "./components/CustomSnackbar";
import LogRocket from "logrocket";
LogRocket.init("zfb2gl/locate-restaurant");

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route />
        </div>
        <CustomSnackbar />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
