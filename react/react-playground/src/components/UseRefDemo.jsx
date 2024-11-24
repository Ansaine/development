import React, { useEffect, useRef, useState } from 'react'


/* 
Say we have a question. How to calculate number of times a page renders.
If we have a state variable that updates upon render, it itself will make another 
render, and incrementing that state variable will again rerender causing infinite loops
of rerendering. So how do we solve this?

We do this using Refs. A ref is a something that persists between renders. And a ref
doesnt cause our component to re-render


Also Refs are used to reference elements as an alternative to getDocumentByID. See focus 
example

*/


const UseRefDemo = () => {
    const [name,setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();

    // whenever the page reloads - empty useEffect
    useEffect(()=>{
        renderCount.current++;
        console.log(renderCount)
    })

    function focus () {
        inputRef.current.focus()
    }


  return (
    <div>
        <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)}/>
        <div>The name is {name}</div>
        <button onClick={focus}>Focus to text</button>

    </div>
  )
}

export default UseRefDemo