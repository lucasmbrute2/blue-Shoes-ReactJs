import React, { useEffect, useState } from "react";
import "./ProductCardView.css"; 

export default function ProductCardView({ product }) {
    return (
        <div className="products">
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
                                <button className="color_choice" type="button" ></button>

                            </li>
                            <li>
                                <button className="color_choice" type="button" ></button>

                            </li>
                            <li>
                                <button className="color_choice" type="button" ></button>

                            </li>
                            <li>
                                <button className="color_choice" type="button" ></button>

                            </li>
                        </ul>
                    </div>

                    <div className="card__size">
                        <p className='card-size-p'> Escolha o tamanho desejado:</p>
                            <ul className="size_options"> 
                                <li>
                                        <button className="size_choice" type="button">37</button>

                                    </li>
                                    <li>
                                        <button className="size_choice" type="button">39</button>

                                    </li>
                                    <li>
                                        <button className="size_choice" type="button">41</button>

                                </li>

                            </ul>


                    </div>
                    <button type="button" className="button-button">adicionar ao carrinho</button>                                               
                </div>

            </div>

        </div>
    )
}
