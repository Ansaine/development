import React, { useContext } from 'react'
import { ThemeContext } from '../ContextAPIDemo'

export const FunctionContextComponent = () => {
    const darkThemeFlag = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkThemeFlag ? '#333' : '#CCC',
        color: darkThemeFlag ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'        
    }

  return (
    <>
        <div style={themeStyles}>This is function theme</div>
    </>
  )
}
