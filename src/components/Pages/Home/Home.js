import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import { ProductList } from "../../ProductList/ProductList";
import Header from "../../Header/Header";
import Brands from "../../Brands/Brands";
import HomeCarousel from "../../Home-Carousel/HomeCarousel";

export default function Home() {
  return(
    <>
      <HomeCarousel/>
      <ProductList/>
      <Brands/>
      <Footer/>
    </>
  ) 
  
  
}
