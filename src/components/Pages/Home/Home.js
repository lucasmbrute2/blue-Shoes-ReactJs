import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import ProductHighlight  from "../../ProductHighlight/ProductHighlight";
import Brands from "../../Brands/Brands";
import HomeCarousel from "../../Home-Carousel/HomeCarousel";
import ProductList from "../../ProductList/ProductList"

export default function Home() {
  return(
    <>
      <HomeCarousel/>
      <ProductHighlight/>
      <Brands/>
      <ProductList/>   
      <Footer/>
    </>
  ) 
  
  
}
