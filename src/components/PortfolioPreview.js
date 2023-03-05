import React from 'react';
import CardItem from './CardItem'
import "./CSS/PortfolioPreview.css"


function PortfolioPreview() {
  return (
    <div className="cards">
        <h1>My Projects</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="./images/fitnessapp/png"
                    text="First TEst"
                    label="First"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPreview;