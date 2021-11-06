import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import { ProductList } from "../../ProductList/ProductList";
import Header from "../../Header/Header";

export default function Home() {
  return(
    <>
      <Header/>
        <ProductList/>
        <div>Home</div>
      <Footer/>
    </>
  ) 
  
  
}
