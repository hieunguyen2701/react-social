/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import MyDropzone from "./Drop"
import {useDropzone} from 'react-dropzone'
// import "./SubmitPost.css"
import {Link} from "react-router-dom"
import uploadimage from '../../assets/image/statusadd.png'
import { auth, storage } from '../Database/Firebase'
import * as constantClass from "../Constant/Constant"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class SubmitPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postText: "",
            imageSrc: "",
            dataIsLoad: false,
            profileImag : uploadimage
        }
    }
    submitPost = () => {
        let payload = {
            "id": Math.floor(Math.random() * 10000000).toString,
            "idUser" : JSON.parse(localStorage.getItem("users")).uid,
            "title": this.state.postTitle,
            "text": this.state.postText,
            "image_src": localStorage.getItem("downloadURL"),
            "upvotes": 0,
            "comments": 0,
            "community": "test",
            "username": localStorage.getItem("username"),
            
        }
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
        }
        fetch(constantClass.localhost+"/post/add", requestOption)
            .then(res => res.json())
            .then(data => {
            console.log(data)
            })
            localStorage.removeItem("downloadURL")
            .catch(error => {
            console.log(error)
        })
    }
    loadImg = (event) => {
        let image = event.target.files[0];
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImag : reader.result})
            }
        }
        reader.readAsDataURL(image)
        const thisContext = this;
        if (image == null || image === undefined) {
            return;
        }
        const storageref = ref(storage, image.name);
        const uploadTask = uploadBytesResumable(storageref, image);
        uploadTask.on(
            "state_changed",
            function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({progressBar: progress});
              },
            function (error) {
                  console.log(error.message)
            },
            function () {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    localStorage.setItem('downloadURL', downloadURL)
                    console.log('File available at', downloadURL);
                }) 
            }
            
        )
    }
   
    render() { 
        return ( 
            <div>
                
                <input placeholder="title" type="text" onChange={(event) => { this.state.postTitle = event.currentTarget.value; }}></input>
                <input placeholder="text" type="text" onChange={(event)=>{this.state.postText=event.currentTarget.value;}}></input>
                <input placeholder="community" type="text"></input>
                <label for="file-upload-status" >
                    <img className="statusbar__upload" src={this.state.profileImag} width="55px" height="55px" />
                </label>
                <input placeholder="image_src" onChange={this.loadImg} type="file"></input>
                <MyDropzone/>
                <Link to="/">
                    <button onClick={this.submitPost}>Submit</button>
                </Link>
            </div>
         );
    }
}
 
export default SubmitPost;