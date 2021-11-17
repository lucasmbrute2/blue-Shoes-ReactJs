import React from 'react'
import AirForce from "../assets/airForce1.png"
import Swoosh from "../assets/black_swoosh.png"
import "./FilterProducts.css"

export default function FilterProducts() {
    const products = [{
        id: 1,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },
    {
        id: 2,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$189,99",
        logo: Swoosh
    },
    {
        id: 3,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },   
    {
        id: 4,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },   
    {
        id: 5,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },  
    {
        id: 6,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },   
    {
        id: 6,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },   
    {
        id: 6,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    },  
    ];
    return (
        <>
        <div>
            <div className='filter-products-titles'>
                <p>Encontramos:</p>
                <h1>{products.length} produtos</h1>
            </div>
        <div className='filter-products-container'>
                {products.map(product=>(
                    <div className='filter-products-container-div' key={product.id}>
                        <img src={product.logo} className='filter-products-logo'></img>
                        <div className="cardImg">                    
                            <img src={product.image} className='cardImg-img'/>
                        </div>   
                        <h2 className='filter-products-container-h2'>{product.name}</h2>
                        <h2 className='filter-products-container-h2'>{product.unity_price}</h2>
                    </div>               
                ))}         
        </div>
        </div>
        </>
    )
}
