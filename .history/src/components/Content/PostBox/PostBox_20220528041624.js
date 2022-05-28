import React from 'react'
import InsertPhotoIcon from '@material-ui/icons/InsertPhotoOutlined'
import InsertPhotoOutlined from '@material-ui/icons/InsertPhotoOutlined'
import './PostBox.css'
import { Redirect , Link} from 'react-router-dom';
function PostBox() {
    const username = localStorage.getItem("username")
  return (
    <Link to={{
        pathname: "/submitPost",
        state: {
          message: "hello "
        }
      }}  className="postbox">
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
              <div className="postbox-icon"> 
                  <InsertPhotoOutlined />
                  <InserLi
              </div>
          </div>
    </Link>
  )
}

export default PostBox