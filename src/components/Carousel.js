import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import firstSlide from "../images/fitnessapp.png"
import secondSlide from "../images/fitness-about.png"
import thirdSlide from "../images/fitness-nutrition.png"
import fourthSlide from "../images/fitness-workouts.png"

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={secondSlide}
                    alt="Second Slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={thirdSlide}
                    alt="Third slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fourthSlide}
                    alt="Fourth slide"
                />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default MyCarousel