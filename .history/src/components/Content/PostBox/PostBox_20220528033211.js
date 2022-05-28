import React from 'react'
import Avatar from './Avatar'
import PhotographIcon from 'material-ui/icons/Pho'

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