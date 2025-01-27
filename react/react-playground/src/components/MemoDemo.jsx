// when we change theme, doubleNumber is recalculated which is actually not needed
// as the value remains same

import React, { useState, useMemo } from 'react'

export default function MemoDemo() {

const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)

// use memo 
const doubleNumber = useMemo(() => {
    return slowFunction(number)
}, [number])

// not using memo
// const doubleNumber = slowFunction(number)


const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    width: '283px'
}

return (
    <>
        <input type="number" value={number} onChange={e => setNumber(parseInt
        (e.target.value) )} />
        <button onClick={() => setDark(prevDark => !prevDark) }>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>    
    </>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 100
}