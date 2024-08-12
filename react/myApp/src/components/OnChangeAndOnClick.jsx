import React, { useState } from 'react'

const OnChangeAndOnClick = () => {
    
let [value, setValue] = useState(0);

const increment = () => {
    setValue(value + 1);
    console.log(value);
}

const decrement = () => {
    setValue(value - 1);
    console.log(value);
}


  return (
    <div>
        <input value={value} readOnly ></input>           {/* If i keep a value={value} prop here, it always switches to the initial value if i type without using hook */}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}


export default OnChangeAndOnClick