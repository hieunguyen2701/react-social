import React from 'react'


type Props = {
    seed? : string
}
function Avatar() {
  return (
      <div>
          <img layout="fill"
              src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          />
    </div>
  )
}

export default Avatar