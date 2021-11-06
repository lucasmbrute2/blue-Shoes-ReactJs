import React, { useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import ProductCard from "../../ProductCard/ProductCard";
import "./ViewProduct.css";
import { useHistory } from "react-router";

export default function ViewProduct (props)  {

    const id = props.match.params.id;

    const [product, setProduct] = useState(undefined);

    //useEffect(() => {
    //    const loadProduct = async () => {
   //         const response = await Api.getById(
   //             Api.GetById(id),
   //             true
   //         );

    //        const results = await response.json();

    //        setProduct(results);

     //   };

    //    loadProduct();
    //}, [id]);

   // const history = useHistory();

   // const handleClickProduct = () =>{
   //     history.push('`/view/${product.id}`')
   // };


    return (
        <div className="view">
            <div className="view-product">
                <ProductCard product={product} />

            </div>

        </div>
    )
}
