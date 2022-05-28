import React from 'react'
import Avatar from './Avatar'
import PhotographIcon from ''
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
function PostBox() {
  return (
    <div>
          <div>
              <Avatar />
              <input type="text"
                  placeholder="create a Post"
              />
              
          </div>
    </div>
  )
}

export default PostBox