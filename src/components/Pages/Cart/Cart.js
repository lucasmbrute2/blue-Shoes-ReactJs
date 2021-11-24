import React, { useContext, useEffect, useState } from 'react'
import { Api } from '../../../Api/Api'
import { Context } from '../../../context/CtxApp'
import OrderForm from '../../OrderForm/OrderForm'
import './Cart.css'

export default function Cart() {
    
    const { cartLocal } = useContext(Context)
    const [productUnique, setproductUnique] = useState([])
    const [value,setValue] = useState(1)
    const valor = value*99.90
    
    const promiseArray = async ()=>{
        const promises = cartLocal.map(async (element) => {
            const response = await Api.getAll(`produto/${element}`,true)
            const body = await response.json()
        
            return body
        })
        const produtos = await Promise.all(promises)
        setproductUnique(produtos)
    }
      
    useEffect(()=>{ 
        promiseArray()       
    },[])
    

    // FUNÇÃO QUE PREVINE VALORES NEGATIVOS
    const pressKey = (e)=>{
        const character = e.key
        if(character === 'Backspace') return        
        
        const changeToNumberCharacter = Number(character)
        if (changeToNumberCharacter >=0 && changeToNumberCharacter<=9){
            if (e.currentTarget.value && e.currentTarget.value.length){
                return
            }else if(changeToNumberCharacter ===0){
                e.preventDefault()
            }
        }else{
            e.preventDefault()
        }   
    }     
    // FUNÇÃO QUE SUBSTITUI 0 POR 1
    const noZero = (e)=>{
        if(e.currentTarget.value[0] === '0') e.currentTarget.value = '1' 
    }

    if(!productUnique){
        return <div>Carrinho vazio...</div>
    }
    return (
        <div className='Cart header-height'>        
                <div className="Cart-Container">
                    <h1 className='Cart-Container-h1'>Carrinho</h1>
                        <div className='cardProduct-div'>
                                <div className='cardProduct-div-details'>
                                <p className='CardProduct-div-details-p firstCard'>Detalhes</p>
                                <p className='CardProduct-div-details-p'>Quantidade</p>
                                <p className='CardProduct-div-details-p'>Preço</p>
                                <p className='CardProduct-div-details-p'>Total</p>
                                {productUnique.map(eachProduct=>(
                                <div className='CardProduct-div-details-div' key={eachProduct.id}>
                                    <img className='img-CardProduct' src={eachProduct.imagem}/>
                                    <div className='items-description'>
                                        <h3 className='items-description-h3'>{eachProduct.nome}</h3>
                                        <p><span className='items-description-span'>Cor:</span> Azul</p>
                                        <p><span className='items-description-span'>Tamanho: </span>39</p>
                                    </div>
                                </div>
                                    ))}
                                <div className='container-buttons'>
                                    <input type='number' onChange={(e)=>setValue(e.target.value)} onKeyDown={pressKey} onBlur={noZero} className='input-quantity' defaultValue={1} min={1}></input>
                                    <button className='button-remove'>Remover</button>
                                </div>
                                <p className='price-number'>99, 90</p>
                                <p className='price-number'>{valor ?valor.toFixed(2): 99.90.toFixed(2)}</p>                   
                            </div>
                             
                    </div>
                </div>
            <OrderForm cartLocal={cartLocal} price={productUnique.reduce((acc, curr)=> acc + curr.preco, 0).toFixed(2)}/>
        </div>
    )
}
