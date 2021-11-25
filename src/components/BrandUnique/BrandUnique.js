import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'

export default function BrandUnique({brand}) {
    const history = useHistory()
    const { user, setProduct } = useContext(Context)

    const handleClick = async (e)=> {
        e.preventDefault()
        
        const response = await Api.getAll(`produto?marca=${brand.marca}`)
        const body = await response.json()
        setProduct(body)
        history.push('/products')
    }

    return (
        <div  onClick={handleClick}>
            <img src={brand.logo} className='card-logo' name='brandName'></img>
        </div>
    )
}
