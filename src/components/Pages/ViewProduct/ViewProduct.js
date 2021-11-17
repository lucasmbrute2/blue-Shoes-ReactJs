import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import ProductCardView from "../../ProductCardView/ProductCardView";
import "./ViewProduct.css";

export default function ViewProduct (props)  {

    const { id } = props.match.params;    
    const [product, setProduct] = useState(undefined);
    
    useEffect(() => {
        const loadProduct = async () => {
            const response = await Api.getById('produto',id,true)
            const results = await response.json();
            setProduct(results);
        }
       loadProduct();
    }, [id]);

    if(product===undefined){
        return <div>Loading...</div>
    }
    return (
        <div className="view">
            <div className="view-product">
                <ProductCardView product={product} />
            </div>
        </div>
    )
}
