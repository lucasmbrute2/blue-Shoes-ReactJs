import React from 'react'
import './OrderFormCheckout.css'

export default function OrderFormCheckout() {
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
                            Itens 2
                        </p>
                        <p>
                            99.90
                        </p>
                    </div>
                    <div className='container-p'>
                        <p>
                            Frete
                        </p>
                        <p>
                            4.50
                        </p>
                    </div>
                </div>
                <div className='orderForm-div-checkout'>
                    <h2>
                        Custo total
                    </h2>
                    <p>
                        104.00
                    </p>
                </div>
            </div>
        </div>
    )
}
