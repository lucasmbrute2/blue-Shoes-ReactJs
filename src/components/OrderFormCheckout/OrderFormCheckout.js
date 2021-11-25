import React from 'react'
import './OrderFormCheckout.css'

export default function OrderFormCheckout({ cartLocal, price }) {

    const frete = 4.50
    const totalCost = Number(price)+frete
    return (
        <div className='orderFormCheckout'>
            <div className='container'>
                <div className='orderForm-div-h2'>
                    <h2>
                        Resumo
                    </h2> 
                </div>       
                <div className='orderForm-div-p'>
                <div className='container-p'>
                            <p>
                                Itens {cartLocal.length}
                            </p>
                            <p>
                                {price}
                            </p>
                        </div>
                        <div className='container-p'>
                            <p>
                                Frete
                            </p>
                            <p>
                                {frete}
                            </p>
                        </div>
                </div>
                <div className='orderForm-div-checkout'>
                    <h2>
                        Custo total
                    </h2>
                    <p>
                        {totalCost} 
                    </p>
                </div>
            </div>
        </div>
    )
}
