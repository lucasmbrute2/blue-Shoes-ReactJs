import React, { useEffect, useState } from 'react'
import { Api } from '../../../Api/Api'
import OrderForm from '../../OrderForm/OrderForm'
import './Cart.css'

export default function Cart() {
    
    const [product,setProduct] = useState({})
    const [value,setValue] = useState(1)

    const valor = value*99.90
    useEffect(()=>{
        const getProduct = async ()=>{
            const response = await Api.getAll('produto/todos',true)
            const body = await response.json()
            console.log('construiu de novo')
            setProduct(body)
        }
        getProduct()
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
                        <div className='CardProduct-div-details-div'>
                            <img className='img-CardProduct' src="https://images.tcdn.com.br/img/img_prod/938519/180_tenis_nike_air_force_1_low_reflective_swoosh_2021_1_8a5c09e4c39fad02f606d8a53323487e_20210812081513.png"/>
                            <div className='items-description'>
                                <h3 className='items-description-h3'>AirForce 1</h3>
                                <p><span className='items-description-span'>Cor:</span> Azul</p>
                                <p><span className='items-description-span'>Tamanho: </span>39</p>
                            </div>
                        </div>
                        <div className='container-buttons'>
                            <input type='number' onChange={(e)=>setValue(e.target.value)} onKeyDown={pressKey} onBlur={noZero} className='input-quantity' defaultValue={1} min={1}></input>
                            <button className='button-remove'>Remover</button>
                        </div>
                        <p className='price-number'>99,90</p>
                        <p className='price-number'>{valor.toFixed(2)}</p>                   
                    </div>
                </div>
            </div>
            <OrderForm/>
        </div>
    )
}
