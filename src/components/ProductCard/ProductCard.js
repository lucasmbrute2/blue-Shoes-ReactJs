import React, { useEffect, useState } from "react";
import "./ProductCard.css"; 
import { useHistory } from "react-router";

export default function ProductCard({product}) {

    const history = useHistory();



    return (
        <div className="products">
            <div className="product">

                <div className="leftContent">
                    <div className="card__image">
                        <img className='card-img' src='https://vulcabras.vteximg.com.br/arquivos/ids/175122-1000-1000/43444797_2-604_img1.png?v=637280973031300000' alt={'product.title'}></img>
                    </div>
                </div>

                <div className="rightContent">

                    <div className="card__title">
                        <h1 className='card-title-h1'>TÊNIS OLYMPIKUS GRAVIDADE FEMININO</h1>
                    </div>
                    
                    <div className="card__price">
                        <p className="card__price__price">R$ 149,90</p>
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
