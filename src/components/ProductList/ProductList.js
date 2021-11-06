
import "./ProductList.css"; 
import React, { useEffect, useState } from 'react';

export const ProductList = () => {

    const [products, setProducts] = useState([{
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },
    {
        id: 2,
        name: "tenis weaewqe",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$189,99"
    },
    {
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },{
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },{
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },
    {
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },
    {
        id: 1,
        name: "tenis treste",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        image: "https://vulcabras.vteximg.com.br/arquivos/ids/173222-1000-1000/43149751_3-007_img1--1-.png?v=637262749352770000",
        unity_price: "R$149,99"
    },
        
    ]);

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
            <button type="button" className="button"> conferir </button>


        </div>

    </div>

    );

    return(
        <div className="content">

            {listProducts}

        </div>
    )
}
