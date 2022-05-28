import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage"
import MainPage from "./components/MainPage/MainPage"
import TimeAgo from 'timeago-react';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      {/* <WelcomePage/> */}
      {
        (localStorage.getItem("users") === undefined || localStorage.getItem("users") == null) ? <WelcomePage /> : <MainPage />
      
      }
    </div>
  );
}

export default App;
