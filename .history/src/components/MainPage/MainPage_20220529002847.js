import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import CommentPost from '../commentPost/commentPost'
import * as constantClass from "../Constant/Constant"
import "./MainPage.css"
import SubmitPostTest from "../SubmitPost/SubmitPostTest"
import CommunityPost from '../communityPost/communityPost';

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
                            <NavBar/>
                            <SubmitPostTest/>
                        </Route>
                        <Route path="/commentPost" >
                            {/* <NavBar /> */}
                            <CommentPost />
                        </Route>
                        <Route path="/communityPost" >
                            {/* <NavBar /> */}
                            <CommunityPost/>
                        </Route>
                    </Switch>
                </Router>
               
            </div>
         );
    }
}
 
export default MainPage;
