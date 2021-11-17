import React, { useEffect, useState } from 'react'
import "./ProductList.css"
import { Api } from "../../Api/Api"
import ProductCard from '../ProductCard/ProductCard'

export default function ProductList(){
    
    const [card,setCard] = useState(undefined)
    
    useEffect(()=>{
        const getCard = async()=>{
            const response = await Api.getAll('produto/todos',true)
            const body = await response.json()
            setCard(body)
        }
        getCard()
    },[])

    if(card === undefined){
        return <div>Loading...</div>
    }
    return (
        <div className='productList container'>
            <h2 className='productList-h2'>Nossos produtos</h2>
            <div className='productList-div'>
                <ProductCard               
                card={card}
                />
            </div>
        </div>
    )
}
