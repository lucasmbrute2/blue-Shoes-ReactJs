import "./ProductHighlight.css"; 
import React, { useEffect, useState } from 'react';
import Nike from "../assets/nike_destaque.png"
import Adidas from "../assets/adidas_destaque.png"
import Mizuno from "../assets/mizuno_destaque.png"
import Nike_Logo from "../assets/nike_logo.png"
import Adidas_Logo from "../assets/adidas_logo.png"
import Mizuno_Logo from "../assets/mizuno_logo.png"
import { Api } from "../../Api/Api";

export const ProductHighlight = () => {

    const products = [{
        id: 1,
        name: "Air Max 97",
        image: Nike,
        logo: Nike_Logo
    },
    {
        id: 2,
        name: "Adidas NMD", 
        image: Adidas,      
        logo: Adidas_Logo
    },
    {
        id: 1,
        name: "Mizuno Wave",
        image: Mizuno,
        logo: Mizuno_Logo
    }       
    ];

    /* const [product, setProduct] = useState([])

    useEffect(() => {
        const loadProductList = async () => {
            const response = await Api.getAll("produto/todos",true);

            const results = await response.json();

            setProduct(results);
            
       };

      loadProductList();
    }, []);
*/

    return(
        <div className="content container">           
            <div className='content-div'>
                <h2 className='content-div-h2'>DESTAQUES</h2>
            </div>                
            <div className='card-container'>
                {products.map(product=>(
                    <div className='card-container-div' key={product.id}>
                        <div className='card-container-logo'>
                            <img src={product.logo} className='card-logo-destaque'></img>
                        </div>
                        <div className="cardImg">                    
                            <img src={product.image} className='cardImg-img'/>
                        </div>   
                        <h2 className='card-container-h2'>{product.name}</h2>
                    </div>               
                ))}         
            </div>
        </div>
    )
}

export default ProductHighlight