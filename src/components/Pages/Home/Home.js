import React from "react";
import "./Home.css";
import Footer from "../../Footer/Footer"
import Navbar from "../../Header/Navbar";
import { ProductList } from "../../ProductList/ProductList";


export default function Home() {
  return(
    <>
      <Navbar/>
      <div><ProductList/></div>
      <Footer/>
    </>
  ) 
  
  
}
