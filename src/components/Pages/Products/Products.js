import React from 'react'
import FilterProducts from '../../Filter-Products/FilterProducts'
import Footer from '../../Footer/Footer'
import SideFilter from '../../Side Filter/SideFilter'
import './Products.css'

export default function Products() {
    
    return (
        <>
        <div className="products-container">
            <SideFilter/>
            <FilterProducts/>
        </div>
        <Footer/>
        </>
    )
}
