import "./styles/App.scss";
import { ThemeProvider } from "styled-components";
import Main from "./containers/main/Main";
import { chosenTheme } from "./theme";
import { Toaster } from "react-hot-toast";
import { handleTitle } from "./components/TitleChangeOnTabSwitch/TitleChangeOnTabSwitch";

function App() {
  handleTitle();
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <div>
          <Main theme={chosenTheme} />
          <Toaster position="bottom-right" />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
