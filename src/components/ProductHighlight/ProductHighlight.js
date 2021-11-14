import "./ProductHighlight.css"; 
import React, { useEffect, useState } from 'react';
import AirForce from "../assets/airForce1.png"
import Swoosh from "../assets/swoosh.png"

export const ProductHighlight = () => {

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
        id: 1,
        name: "Air Force 1",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: AirForce,
        unity_price: "R$149,99",
        logo: Swoosh
    }       
    ];

    //useEffect(() => {
    //    const loadProductList = async () => {
    //        const response = await Api.buildApiGetRequest(Api.readAllUrl());

    //        const results = await response.json();

    //        setProducts(results);
    //    };

    //    loadProductList();
    //}, []);

    return(
        <div className="content container">           
            <div className='content-div'>
                <h2 className='content-div-h2'>DESTAQUES</h2>
            </div>                
            <div className='card-container'>
                {products.map(product=>(
                    <div className='card-container-div' key={product.id}>
                        <img src={product.logo} className='card-logo'></img>
                        <div className="cardImg">                    
                            <img src={product.image} className='cardImg-img'/>
                        </div>   
                        <h2 className='card-container-h2'>{product.name}</h2>

                    </div>               
                ))}         
            </div>
        </div>
    )
}

export default ProductHighlight