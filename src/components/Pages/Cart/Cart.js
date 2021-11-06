import React from 'react'
import EditDelete from '../../Buttons/Edit-Delete/EditDelete'
import CardProduct from '../../Card-Product/CardProduct'
import Navbar from '../../Header/Navbar'
import './Cart.css'

export default function Cart() {
    return (
        <>
        <Navbar/>
        <div className="Cart-Container">
            <div className="Cart">
                <div className="my-products">
                <h1>Meus produtos</h1>
                    {/* products.map(index,product) */}
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <div className="Total-Price">
                        <p>Preço Total:</p>
                        <p>999,99</p>
                    </div>
                    <div className="Buy">
                        <EditDelete
                        Title='Comprar'
                        className='Button-Edit'
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}