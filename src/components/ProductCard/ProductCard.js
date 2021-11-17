import "./ProductCard.css"
import React, { useContext, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { Context } from "../../context/CtxApp"
import { Api } from "../../Api/Api"

export default function ProductCard({ card }) {

    // ACESSANDO O ID DO CARRINHO DO USUÁRIO
    const { user } = useContext(Context)    
    const id = user? user.carrinho: null
    
    // const keyRef = useRef(null)
    
      const HandleSubmitCart = async(e,produtoId)=>{
        
        e.preventDefault()

        const payload = {
            carrinhoId: Number(id),
            produtoId,
            quantidade: 1
        }
        
        
        const response = await Api.post('item/criar',payload,true)
        const body = await response.json()
        if(response.status ===201){
            alert('Sucesso!')
        }
    }

    return (
        <div className='productCard'>
            {card.map(eachCard=>(
                <form onSubmit={(e)=>HandleSubmitCart(e,eachCard.id)} className='productCard-form'>
                    <div className='productCard-div' key={eachCard.id} /*ref={keyRef}*/>
                        <Link to={`/view/${eachCard.id}`} className='productCard-link'>
                            <img src={eachCard.imagem} className='productCard-img'/>
                        </Link>
                        <p className='productCard-p'>{eachCard.nome}</p>
                        <div className='productCard-div-button'>
                            <p className='productCard-div-button-price'>{eachCard.preco.toFixed(2)}</p>                           
                            <button type='submit' className='productCard-button'>
                                <p>Add to cart</p>                   
                            </button>               
                        </div>
                    </div>
                </form>                 
            ))}
        </div>
    )
}
