import React from 'react';
import "./ProductCard.css"; 
import { useHistory } from "react-router";

export default function ProductCard({product}) {

    const history = useHistory();



const handleClick = () => {
    history.push(`/product/view/${product.id}`);
};


    return (
        <div className="products" onClick={handleClick}>
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
                        <p className="card__color__color">  escolha a cor desejada</p>
                        <p className="card__color__color">Azul</p>
                    </div>

                    <div className="card__size">
                        <p className='card-size-p'> escolha o tamanho desejado</p>
                        <p><select className="select">
                            <option value="valor1"> 37</option>
                            <option value="valor2"> 39</option>
                            <option value="valor3"> 41</option>

                            </select>
                        </p>
                    </div>
                    <button type="button" className="button-button">adicionar ao carrinho</button>                                               
                </div>

            </div>

        </div>
    )
}
