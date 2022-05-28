import React from 'react'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'
import './PostBox.css'
function PostBox() {
    const username = localStorage.getItem("username")
  return (
    <div>
          <div className="post-box-container">
              <img
                  className="post-box-i"
                  src={`https://avatars.dicebear.com/api/open-peeps/${username}.svg`}
                  alt =""
              /> 
              <input type="text"
                  placeholder="create a Post"
              />
              <InsertPhotoOutlined/>
          </div>
    </div>
  )
}

export default PostBox