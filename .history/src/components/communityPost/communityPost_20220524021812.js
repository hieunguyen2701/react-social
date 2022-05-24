import React, { Component } from 'react';
class CommunityPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            dataIsLoad :false
        }
    }
    componentDidMount() {
        fetch(constantClass.localhost+"/post/getAll")
        .then(res => res.json())
        .then(data => {
            this.setState({
                postArray: data,
                dataIsLoad : true
            })
        })
    }
    render() { 
        return ( 
            <div>
                Hello
            </div>
         );
    }
}
 
export default CommunityPost;