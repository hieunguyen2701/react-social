import React from 'react'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'
import './PostBox.css'
function PostBox() {
    const username = localStorage.getItem("username")
  return (
    <div className="postbox">
          <div className="post-box-container">
              <img
                  className="post-box-avatar"
                  src={`https://avatars.dicebear.com/api/open-peeps/${username}.svg`}
                  alt =""
              /> 
              <input
                  className="post-box-input"
                  type="text"
                  placeholder="create a Post"
              />
              <InsertPhotoOutlined cla/>
          </div>
    </div>
  )
}

export default PostBox