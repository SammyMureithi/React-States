import React from 'react'

function Counter() {
    const [counter, setCounter] = React.useState( 0 );
    function changeCounter(e) {
        if ( e.target.name === "increament" ) {
            setCounter( prevCount => prevCount + 1 );
        }
        else {
            setCounter( prevCount => prevCount - 1 );
        }
    }
  return (
      <div>
          <h1>{counter}</h1>
          <button name='increament' onClick={changeCounter}>+Increament</button>
          <button name='decreament' onClick={changeCounter}>-Decreament</button>
    </div>
  )
}

export default Counter