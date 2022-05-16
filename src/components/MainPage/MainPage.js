import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import SubmitPost from '../SubmitPost/SubmitPost'
import CommentPost from '../commentPost/commentPost'
import * as constantClass from "../Constant/Constant"
import "./MainPage.css"
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
            
        }
    }
    
    state = {  }
    render() { 
        return ( 
            <div className="MainPage">
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <NavBar />
                            <Content/>
                        </Route>
                        <Route path="/submitPost" >
                            <SubmitPost/>
                        </Route>
                        <Route path="/commentPost" >
                            <NavBar />
                            <CommentPost />
                        </Route>
                    </Switch>
                </Router>
               
            </div>
         );
    }
}
 
export default MainPage;

{/* <div className="wellcome">
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
</div> */}