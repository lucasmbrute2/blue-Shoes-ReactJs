import React, { useContext, useEffect, useState } from "react";
import "./ProductCardView.css"; 
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";
import { Context } from "../../context/CtxApp";
import { useHistory } from "react-router";

export default function ProductCardView({ product }) {
    
    const { cartLocal, setCartLocal } = useContext(Context)
    let size = 39
    let sneakerColor = Object.keys(product.tamanhos)
    console.log(product)
    const HandleAddToCart = (e) =>{
        e.preventDefault()  

        setCartLocal([...cartLocal,{
            tamanho: size,
            id: product.id,
        }])
        alert("Produto adicionado ao carrinho")  
    }
    
    return (
        <div className="products">
            <form onSubmit={(e)=>HandleAddToCart(e)}>            
                <div className="product">
                    <div className="leftContent">
                        <div className="card__image">
                            <img className='card-img' src={product.imagem} alt={product.nome}></img>
                        </div>
                    </div>
                    <div className="rightContent">

                        <div className="card__title">
                            <h1 className='card-title-h1'>{product.nome}</h1>
                        </div>
                        
                        <div className="card__price">
                            <p className="card__price__price">{product.preco.toFixed(2)}</p>
                        </div>

                        <div className="card__color">
                            <p className="card__color__color">  Escolha a cor desejada:</p>
                            <ul className="color_options">
                                <li>
                                    <button className={`color_choice ${sneakerColor}`} type="button" ></button>
                                </li>
                            </ul>
                        </div>

                        <div className="card__size">
                            <p className='card-size-p'> Escolha o tamanho desejado:</p>
                                <ul className="size_options"> 
                                    <select className='size_select'>
                                        {product.tamanhos.Branco?.map(eachSize =>(
                                            <option className="size_choice" type="button" onClick={size=eachSize}>{eachSize}</option>
                                            ))}
                                        {product.tamanhos.preto?.map(eachSize =>(
                                            <option className="size_choice" type="button" onClick={size=eachSize}>{eachSize}</option>
                                            ))}
                                        {product.tamanhos.preto?.map(eachSize =>(
                                            <option className="size_choice" type="button" onClick={size=eachSize}>{eachSize}</option>
                                            ))}                                            
                                    </select>
                                </ul>
                        </div>
                        <SubmitButton id="submitProductView" value="Adicionar ao carrinho"/>                                        
                    </div>
                </div>
            </form>

        </div>
    )
}
