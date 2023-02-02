import React from 'react'
import "../components/CSS/PortfolioPreview.css"
import PPCards from './PPCards'
import {projects} from "../components/PPdata"

function PortfolioPreview() {
  return (
    <div className="portfolio">
        <div className="port-texts">
            <h1 className="port-title"> Check out my projects</h1>
        </div>
        <div className="port-list">
          {projects.map((item) => (
            <PPCards key={item.id} img={item.img}/>
          ))}
        </div>
        </div>
  );
}

export default PortfolioPreview