import React, { Component } from 'react';
import "./Action.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail : "hello name"
        }
    }

    logOut = () => {
        localStorage.removeItem("users")
        window.location.reload();
    }
    log = () => {
        console.log(this.userEmail)
    }
    render() { 
        const user = JSON.parse(localStorage.getItem("users"))
        var userGmail = user.email
        return ( 
            <div>
                <div className="actions">   
                    <button onClick={this.logOut} className="button primary-button">LogOut</button>
                    <span className="hello">Hello</span>
                    <span className = "userGmail">{userGmail}</span>
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



