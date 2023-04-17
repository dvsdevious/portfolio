import React from 'react';
import CardItem from './CardItem'
import "./CSS/Cards.css"

import FitnessImg from "../images/fitnessapp.png"
import WeatherImg from "../images/weatherapp.png"
import DictionaryImg from "../images/dictionaryapp.png"
import { Container, Col } from 'react-bootstrap';


function Cards() {
  return (
    <div className='cards'>
      <h1>My Project's preview</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <Container className='cards__items'>
            <Col>
            <CardItem
              src={FitnessImg}
              text='Website for a small business brand with information about workouts and nutrition.'
              label='Fitness App'
              path='/projects'
            />
            </Col>
            <Col>
            <CardItem
              src={WeatherImg}
              text='The weather app with a search engine and live data that allows you to check the weather forecast in any city of the world.'
              label='Weather App'
              path='/projects'
            />
          </Col>
          <Col>
            <CardItem
              src={DictionaryImg}
              text='A fully functional React Dictionary Search application with a word definitions, synonyms and images.'
              label='Dictionary App'
              path='/projects'
            />
          </Col>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Cards;
