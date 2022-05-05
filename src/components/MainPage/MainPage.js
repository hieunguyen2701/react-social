import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Content from '../Content/Content'
import "./MainPage.css"
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <NavBar />
                <Content/>
            </div>
         );
    }
}
 
export default MainPage;