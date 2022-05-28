import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage"
import MainPage from "./components/MainPage/MainPage"
function App() {
  return (
    <div className="App">
      {/* <WelcomePage/> */}
      {
        (localStorage.getItem("users")===undefined ||  localStorage.getItem("users")== null)?<WelcomePage/> : <MainPage/>
      }
    </div>
  );
}

export default App;
