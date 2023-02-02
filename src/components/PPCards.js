import React from 'react'
import "../components/CSS/PPCards.css"


const PPCards = ({img}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <img src={img} alt="" className="p-img"/>
    </div>
  )
}

export default PPCards