import { Carousel } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCarousel.css'
import img1 from '../assets/first-img.webp'
import img2 from '../assets/second-img.jpg'
import img3 from '../assets/third-img.jpg'

export default function HomeCarousel() {
    return (
        <div className="home-carousel">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />         
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
    )
}
