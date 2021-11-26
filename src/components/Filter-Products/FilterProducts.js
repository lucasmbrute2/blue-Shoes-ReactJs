import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/CtxApp'
import "./FilterProducts.css"

export default function FilterProducts() {
    const { cartLocal, setCartLocal, product } =  useContext(Context) 
    
    const HandleSubmitProductView = (productId)=>{
        setCartLocal([...cartLocal,{
            tamanho: 39,
            id: productId
        }])
    }
    
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
                    <div className="cardImg">                    
                        <Link to={`/view/${eachProduct.id}`}>
                            <img src={eachProduct.imagem} className='cardImg-img'/>
                        </Link>
                    </div>   
                    <h2 className='filter-products-container-h1'>{eachProduct.nome}</h2>
                    <div className="div-i-h2">
                        <h2 className='filter-products-container-h2'>R${eachProduct.preco.toFixed(2)}</h2>
                        <p className="plusCart" onClick={()=>HandleSubmitProductView(eachProduct.id)} >Add to cart</p>
                    </div>
                </div>               
            ))}         
        </div>
        </div>
        </>
    )
}
