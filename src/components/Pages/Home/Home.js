import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import { ProductList } from "../../ProductList/ProductList";

export default function Home() {
  return(
    <>
      <ProductList/>
      <div>Home</div>
      <Footer/>
    </>
  ) 
  
  
}
