import { Carousel } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCarousel.css'

export default function HomeCarousel() {
    return (
        <div className="home-carousel">
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/281104.jpg"
            alt="First slide"
            />         
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.wallpapersafari.com/81/43/tKqRD9.jpg"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0491/4266/1278/files/imagem_2021-09-06_015541.png?v=1630904145"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
    )
}
