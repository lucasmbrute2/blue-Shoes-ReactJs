import React from 'react';
import "./ProductList.css"; 
import React, { useEffect, useState } from 'react';

export const ProductList = () => {

    const [products, setProducts] = useState([]);

    //useEffect(() => {
    //    const loadProductList = async () => {
    //        const response = await Api.buildApiGetRequest(Api.readAllUrl());

    //        const results = await response.json();

    //        setProducts(results);
    //    };

    //    loadProductList();
    //}, []);


    const listProducts = products.map((product) =>
    <div className="card" key={product.id}>
        <div className="cardImg">
            <img src={product.image} />
        </div>
        <h2>{product.name}</h2>

        <div className="CardInfo" >
            
            <p> {product.description} </p>
            <p> {product.unity_price}</p>

        </div>

    </div>

    );

    return(
        <div className="content">

            {listProducts}

        </div>
    )
}
