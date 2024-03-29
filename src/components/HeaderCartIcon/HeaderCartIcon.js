import React, { useContext, useEffect, useState } from 'react'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'

export default function HeaderCartIcon() {
    
    const { user, cart ,setCart, cartLocal } = useContext(Context)
    const  id = user? user.carrinho.id : null

    useEffect(()=>{
        const getCartId = async ()=>{
            const response = await Api.getById('carrinho',id,true)
            const body = await response.json()
            setCart(body)
        }
    getCartId()
    },[])
    
    const cartNumber = cartLocal.length

    if(!cart){
        return <div>Loading...</div>
    }

    return (
        <div>          
            <i class="fas fa-shopping-cart"></i>  
            <span className='header-li-cartArray'>
                {cartNumber}
            </span>
        </div>
    )
}
