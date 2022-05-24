/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import "./SubmitPostTest.css";
import { auth, storage } from "../Database/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as constantClass from "../Constant/Constant";
import SideBar from "../Content/SideBar/SideBar";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'

class SumbitPostTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postText: "",
      postCommunity: "",
      imageSrc: "",
      profileImag: null,
    };
  }

  componentDidMount() {
    // change button js
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const buttons = $$(".form-label");
    const formContents = $$(".form-content");

    const buttonActive = $(".form-label.active");
    const line = $(".form-labels .line");

    line.style.left = buttonActive.offsetLeft + "px";
    line.style.width = `${}`buttonActive.offsetWidth + "px";

    buttons.forEach((button, index) => {
      const formContent = formContents[index];

      button.onclick = function () {
        $(".form-label.active").classList.remove("active");
        $(".form-content.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        formContent.classList.add("active");
      };
    });

    // auto resize text area
    const tx = document.getElementsByTagName("textarea");

    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = "auto";
      this.style.overFlowWrap = "break-word";
      this.style.height = this.scrollHeight + "px";
    }
    // drag and drop js
    let files = [],
      browser = $(".select"),
      input = $("#input-file");
    // input change event
    browser.addEventListener("click", () => input.click());
    input.addEventListener("change", () => {});
  }

  loadImg = (event) => {
    const notification = toast.loading('Image is loading ....')
    let image = event.target.files[0];
    const $ = document.querySelector.bind(document);
    let imagesContainer = $(".images-container");
    console.log(imagesContainer);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImag: reader.result });
      }
    };
    reader.readAsDataURL(image);
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
        thisContext.setState({ progressBar: progress });
      },
      function (error) {
        toast.error('Whoops something went wrong !', {
          id : notification
        })
        console.log(error.message);
      },
      function () {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          localStorage.setItem("downloadURL", downloadURL);
          console.log("File available at", downloadURL);
        });
        imagesContainer.classList.toggle("none-display");
        toast.success('Loading success', {
          id : notification
      });
      }
    );
  };
  delImage = () => {
    const $ = document.querySelector.bind(document);
    let imagesContainer = $(".images-container");
    imagesContainer.classList.toggle("none-display");
    localStorage.removeItem("downloadURL");
  };
  submitPost = () => {
    const notification = toast.loading('Post is uploading ....')
    let payload = {
      id: Math.floor(Math.random() * 10000000).toString,
      idUser: JSON.parse(localStorage.getItem("users")).uid,
      title: this.state.postTitle,
      text: this.state.postText,
      image_src: localStorage.getItem("downloadURL"),
      upvotes: 0,
      comments: 0,
      community: this.state.postCommunity,
      username: localStorage.getItem("username"),
    };
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(constantClass.localhost + "/post/add", requestOption)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Post upload successfull', {
          id : notification
      });
      })
        localStorage.getItem("downloadURL")? localStorage.removeItem("downloadURL"):undefined
      .catch((error) => {
        toast.error('Whoops something went wrong !', {
          id : notification
        })
        });
  };
  render() {
    return (
      <div className="content">
        <div className="bars-wrapper">
          <div className="bars-wrapper-inside">
            <div className="posts-wrapper">
              <div class="main">
                <div class="container submitPost">
                  <div class="post-wrapped">
                    <div class="post-label">
                      <p class="post-title">Create post</p>
                    </div>
                    <div class="form-wrapped">
                      <div class="form-labels">
                        <button class="form-label active" id="form-label_1">
                          <span class="form-label--icon">
                            <i class="ti-notepad"></i>
                          </span>
                          <span>Post</span>
                        </button>
                        <button class="form-label" id="form-label_2">
                          <span class="form-label--icon">
                            <i class="ti-image"></i>
                          </span>
                          <span>Images Video</span>
                        </button>
                        <div class="line"></div>
                      </div>
                      <div class="form-comment">
                        <div id="form_1">
                          <input
                            type="text"
                            name=""
                            id="form-title"
                            placeholder="Community"
                            onChange={(event) => {
                              this.state.postCommunity =
                                event.currentTarget.value;
                            }}
                          />
                          <input
                            type="text"
                            name=""
                            id="form-title"
                            placeholder="Title"
                            onChange={(event) => {
                              this.state.postTitle = event.currentTarget.value;
                            }}
                          />
                          <textarea
                            name=""
                            id="form-content"
                            class="form-content active"
                            placeholder="Text (optional)"
                            cols="30"
                            onChange={(event) => {
                              this.state.postText = event.currentTarget.value;
                            }}
                          ></textarea>

                          <div
                            class="drag-drop-area form-content"
                            draggable="true"
                          >
                            <div class="top">
                              <span class="inner">Upload images here</span>
                              <span class="select">Upload</span>
                              <input
                                name="file"
                                type="file"
                                class="file"
                                onChange={this.loadImg}
                                id="input-file"
                                multiple
                              />
                            </div>
                            <div class="images-container ">
                              <div class="image">
                                <img src={this.state.profileImag} alt="image" />
                                <span onClick={this.delImage}>&times;</span>
                              </div>
                            </div>
                          </div>

                          <Link to="/" class="form-submit-btn btn">
                            <button onClick={this.submitPost}>Post</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                    <SideBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumbitPostTest;
