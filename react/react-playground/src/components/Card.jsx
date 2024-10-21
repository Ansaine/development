import React from 'react'
import '../styles/card.css'

const Card = ({title}) => {
  return (
    <div className='card-boundary'>
        <h1>{title}</h1>
    </div>
  )
}

export default Card