import React from 'react'
import './CardProduct.css'

export default function CardProduct() {
    return (
        <div className="Products">
            <p>Nome do produto</p>
            <p>1</p>
            <img src="https://images.tcdn.com.br/img/img_prod/938519/180_tenis_nike_air_force_1_low_reflective_swoosh_2021_1_8a5c09e4c39fad02f606d8a53323487e_20210812081513.png"/>
            <p>Preço</p>
            <button>Remover</button>
        </div>
    )
}
