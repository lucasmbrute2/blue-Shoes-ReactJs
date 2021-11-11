import React from 'react'
import './SideFilter.css'

export default function SideFilter() {
    return (
        <>
        <div className="side-filter-container">
            <details>
                <summary>Marca</summary>
                <section>
                    <p>Nike</p>
                    <p>Adidas</p>
                    <p>Puma</p>
                </section>
            </details>
            <details>
                <summary>Tamanho</summary>
                <section>
                    <p>37</p>
                    <p>38</p>
                    <p>39</p>
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
