import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import ProductCard from "../../ProductCardView/ProductCardView";
import "./ViewProduct.css";

export default function ViewProduct (props)  {

    const { id } = props.match.params;    
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const loadProduct = async () => {
            const response = await Api.getById(
                Api.getById(id)
            );
           const results = await response.json();
           setProduct(results);
        };
       loadProduct();
    }, [id]);

    return (
        <div className="view">
            <div className="view-product">
                <ProductCard product={product} />
            </div>
        </div>
    )
}
