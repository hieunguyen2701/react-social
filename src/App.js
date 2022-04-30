import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login/>
            </Route>
            <Route path="/Register" >
              <Register/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
