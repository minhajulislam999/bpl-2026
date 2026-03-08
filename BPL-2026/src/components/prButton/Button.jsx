import React, { useState } from 'react'

function Button() {
    const [isLiked, setLiked] = useState(false);
  return (
    <div>
        <button onClick={() => setLiked(!isLiked)} className="btn tooltip">
            {isLiked === true ? "Liked  💙 " : "Like ❤️"}
        </button>
    </div>
  )
}

export default Button
