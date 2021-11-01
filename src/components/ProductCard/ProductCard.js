import React from 'react';
import "./ProductCard.css"; 
import { useHistory } from "react-router";

export default function ProductCard({product}) {

//    const history = useHistory();



//const handleClick = () => {
 //   history.push(`/product/view/${product.id}`);
//};


    return (
        <div className="products">
            <div className="product">

                <div className="leftContent">
                    <div className="card__image">
                        <img src={product.image}></img>
                    </div>
                </div>

                <div className="rightContent">

                    <div className="card__title">
                        <h1>{product.name}</h1>
                    </div>
                    
                    <div className="card__price">
                        <p>{product.unity_price}</p>
                    </div>

                    <div className="card__color">
                        <p>{product.color}</p>
                    </div>

                    <div className="card__size">
                        <p>{product.size}</p>
                    </div>

                    <button type="button">carrinho</button> 
               
                                

                </div>

            </div>

        </div>
    )
}
