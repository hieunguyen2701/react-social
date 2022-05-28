import React from 'react'
import Avatar from './Avatar'
import PhotographIcon from ''

function PostBox() {
  return (
    <div>
          <div>
              <Avatar />
              <input type="text"
                  placeholder="create a Post"
              />
              <PhotographIcon />
          </div>
    </div>
  )
}

export default PostBox