import React, { useState } from 'react'

function ColorBtn() {
    const [color, setColor] = useState('red');
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={() => setColor(color === 'red' ? 'green' : color === 'green' ? 'blue' : 'red')} className='btn' >
        {color}
      </button>
    </div>
  )
}

export default ColorBtn
