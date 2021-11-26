import React from "react";
import FilterProducts from "../../Filter-Products/FilterProducts";
import Footer from "../../Footer/Footer";
import SideFilter from "../../Side Filter/SideFilter";
import Header from "../../Header/Header";
import "./Products.css";

export default function Products() {
  return (
    <>
      <div className="products-container">
        <Header />
        <SideFilter />
        <FilterProducts />
      </div>
      <Footer />
    </>
  );
}
