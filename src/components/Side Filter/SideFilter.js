import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api'
import SideFilterBrands from '../SideFilterBrands/SideFilterBrands'
import './SideFilter.css'

export default function SideFilter() {
    const [brands, setBrand] = useState([])

    useEffect(()=>{
        const loadBrandList = async () => {
            const response = await Api.getAll("marca/todas",true);
            const results = await response.json();
            setBrand(results);
        }
        loadBrandList();
    },[])
    return (
        <>
        <div className="side-filter-container">
            <details>
                <summary>Marca</summary>
                <section>
                {brands.map((brand,index)=>(
                    <SideFilterBrands
                    brand={brand}
                    />
                ))}
                </section>
            </details>
            <details>
                <summary>Gênero</summary>
                <section>
                    <p>Masculino</p>
                    <p>Feminino</p>
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
