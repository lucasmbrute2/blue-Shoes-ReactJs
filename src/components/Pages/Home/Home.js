import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import { ProductList } from "../../ProductList/ProductList";
import Header from "../../Header/Header";
import Brands from "../../Brands/Brands";

export default function Home() {
  return(
    <>
      <Header/>
        <ProductList/>
        <Brands/>
        <div>Home</div>
      <Footer/>
    </>
  ) 
  
  
}
