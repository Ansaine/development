import React, {useState} from 'react'
import { FunctionContextComponent } from './helper/FunctionContextComponent'

export const ThemeContext = React.createContext()

const ContextAPIDemo = () => {

    const [darkThemeFlag, setDarkThemeFlag] = useState(true)

    function toggleTheme() {
        setDarkThemeFlag (prevDarkTheme => !prevDarkTheme)
    }
    
    return (
    <>
        <ThemeContext.Provider value={darkThemeFlag}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent />
        </ThemeContext.Provider>
    </>    
    )
}

export default ContextAPIDemo





