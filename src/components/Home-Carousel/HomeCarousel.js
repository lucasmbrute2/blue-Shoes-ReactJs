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
            src="https://coolwallpapers.me/picsup/3101295-athlete_jordans_jumpman_kicks_nike_shoes_sidewalk_sneakers_socks_sports_street.jpg"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://wallpaperforu.com/wp-content/uploads/2020/08/sneaker-wallpaper-20082217135426-scaled.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
    )
}
