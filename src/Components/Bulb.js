import React, { useState } from 'react'

function Bulb() {
    const [on, setOn] = useState( true );
    function handleClick() {
        setOn(prevState => !prevState)
    }
  return (
      <div>
          <button onClick={handleClick}>{on ? "Want Apples" : "Want Roses"}</button>
          <h1>{on?"🥀":"🍎"}</h1>
    </div>
  )
}

export default Bulb