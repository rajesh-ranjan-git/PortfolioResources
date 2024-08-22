import Home from './pages/home/Home';
import Menu from './components/menu/Menu';
import logo from './logo.svg';
import './styles/App.scss';
import { ThemeProvider } from "styled-components";
import Main from './containers/main/Main';
import { chosenTheme } from "./theme";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    // <div className="App">
    //   <Menu/>
    //   <Home/>
    // </div>    
    <ThemeProvider theme={chosenTheme}>
      <>
      <div>
        <Main theme= {chosenTheme}/>
        <Toaster position="bottom-right" />
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
