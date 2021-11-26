import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'

export default function SideFilterBrands({brand}) {
    
    const { setProduct } = useContext(Context)
    const handleClick = async (e)=> {
        e.preventDefault()
        
        const response = await Api.getAll(`produto?marca=${brand.nome}`)
        const body = await response.json()
        setProduct(body)
    }
    return (
        <div>
            <p onClick={handleClick}>{brand.nome}</p>
        </div>
    )
}
