import React, { useContext } from 'react'
import { Api } from '../../Api/Api'
import { Context } from '../../context/CtxApp'
import './SideFilter.css'

export default function SideFilter() {
    
    const { setProduct } = useContext(Context)
    
    const HandleFilterSideBar = async (e) =>{
        const elementText = e.target.innerText
        const response = await Api.getAll(`produto?marca=${elementText}`)
        const body = await response.json()
        setProduct(body)
    }
    
    return (
        <>
        <div className="side-filter-container">
            <details>
                <summary>Marca</summary>
                <section>
                    <p onClick={(e)=>HandleFilterSideBar(e)}>Nike</p>
                    <p onClick={(e)=>HandleFilterSideBar(e)}>Adidas</p>
                    <p onClick={(e)=>HandleFilterSideBar(e)}>Puma</p>
                </section>
            </details>
            <details>
                <summary>Cores</summary>
                <section>
                    <p>Azul</p>
                    <p>Vermelho</p>
                    <p>Branco</p>
                </section>
            </details>
        </div>
        </>
    )
}
