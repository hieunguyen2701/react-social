import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login/Login"
import Register from "./Register/Register"
import "./WelcomePage.css"

function WellcomePage() {
  return (
      <div className="wellcome">
      <div className="WellcomePage">
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
      </div>
    );
  }
  
  export default WellcomePage;