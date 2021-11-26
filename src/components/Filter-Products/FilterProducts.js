import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'
import "./FilterProducts.css"

export default function FilterProducts() {
    const { product } =  useContext(Context) 
    return (
        <>
        <div>
            <div className='filter-products-titles'>
                <p>Encontramos:</p>
                <h1>{product.length} produtos</h1>
            </div>
        <div className='filter-products-container'>
                {product.map(eachProduct=>(
                    <div className='filter-products-container-div' key={eachProduct.id}>
                        <img src={eachProduct.logo} className='filter-products-logo'></img>
                        <Link to={`/view/${eachProduct.id}`}>
                        <div className="cardImg">                    
                            <img src={eachProduct.imagem} className='cardImg-img'/>
                        </div>   
                        </Link>
                        <h2 className='filter-products-container-h1'>{eachProduct.nome}</h2>
                        <h2 className='filter-products-container-h2'>R${eachProduct.preco}</h2>
                    </div>               
                ))}         
        </div>
        </div>
        </>
    )
}
