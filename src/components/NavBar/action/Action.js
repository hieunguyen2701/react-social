import React, { Component } from 'react';
import "./Action.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import * as constantClass from "../../Constant/Constant"
class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "hello name",
            username :  null
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("users"))
    
        fetch(constantClass.localhost+"/user/find?id="+user.uid)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("username", data.username)
            this.setState({         
                username : data.username
            })
        })
   }
    logOut = () => {

        localStorage.clear()
        window.location.reload();
    }
    render() { 
        return ( 
            <div>
                <div className="actions">   
                    <button onClick={this.logOut} className="button primary-button">LogOut</button>
                    <span className="hello">Hello</span>
                    <span className = "username">{this.state.username}</span>
                    <div className="profile">
                        <PersonIcon className="hoverable" />
                        <ArrowDropDownIcon className="hoverable" />
                    </div>
                </div>
            </div>
           
         );
    }
}
 
export default Action;



