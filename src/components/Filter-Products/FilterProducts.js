import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/CtxApp'
import AirForce from "../assets/airForce1.png"
import Swoosh from "../assets/black_swoosh.png"
import "./FilterProducts.css"

export default function FilterProducts() {
    const { product, setproduct } = useContext(Context)
    
    // const products = [{
    //     id: 1,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },
    // {
    //     id: 2,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$189,99",
    //     logo: Swoosh
    // },
    // {
    //     id: 3,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },   
    // {
    //     id: 4,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },   
    // {
    //     id: 5,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },  
    // {
    //     id: 6,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },   
    // {
    //     id: 6,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },   
    // {
    //     id: 6,
    //     name: "Air Force 1",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    //     image: AirForce,
    //     unity_price: "R$149,99",
    //     logo: Swoosh
    // },  
    // ];
    
    
    return (
        <>
        <div>
            <div className='filter-products-titles'>
                <p>Encontramos: 15</p>
                <h1>{product.length} produtos</h1>
            </div>
        <div className='filter-products-container'>
                {product.map(eachProduct=>(
                    <div className='filter-products-container-div' key={eachProduct.id}>
                        <img src={eachProduct.logo} className='filter-products-logo'></img>
                        <div className="cardImg">                    
                            <img src={eachProduct.imagem} className='cardImg-img'/>
                        </div>   
                        <h2 className='filter-products-container-h2'>{eachProduct.nome}</h2>
                        <h2 className='filter-products-container-h2'>{eachProduct.preco}</h2>
                    </div>               
                ))}         
        </div>
        </div>
        </>
    )
}
