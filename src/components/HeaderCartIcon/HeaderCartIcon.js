import React, { useContext, useEffect, useState } from 'react'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'

export default function HeaderCartIcon() {
    
    const { user, cart ,setCart, toggle, cartLocal, setCartLocal } = useContext(Context)
    const  { id }  = user? user.carrinho : null
    console.log(id)
    useEffect(()=>{
        const getCartId = async ()=>{
        const response = await Api.getById('carrinho',id,true)
        const body = await response.json()
        setCart(body)
        console.log(body)
    }
    getCartId()
    },[toggle])
    
    if(cart===undefined){
        return <div>Loading...</div>
    }
    return (
        <div>          
            <i class="fas fa-shopping-cart"></i>  
            <span className='header-li-cartArray'>
                {user ? cart.Item_do_carrinho.length : 0 }
            </span>
        </div>
    )
}
