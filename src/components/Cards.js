import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out the projects I've created</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className='cards__items'>
            <CardItem
              src='images/weatherapp.png'
              text='Weather App based on Weather API hjsghkjhrgkhgehrgkjerjg'
              label='Weather'
              path='/projects'
            />
            <CardItem
              src='images/fitnessapp.png'
              text='Fitness Website for a personal trainer sjhgjshgkhgiwhgishgsihgsie suhgklusrhg'
              label='Fitness'
              path='/projects'
            />
          </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
