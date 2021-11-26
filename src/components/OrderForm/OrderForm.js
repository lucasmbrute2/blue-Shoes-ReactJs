import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../../context/CtxApp'
import SubmitButton from '../Buttons/SubmitButton/SubmitButton'
import "./OrderForm.css"

export default function OrderForm({ cartLocal, price }) {
   
    const history = useHistory()
    const { setOrder, user, setVerificationLogin} = useContext(Context)
    const frete = 4.50
    const totalCost = Number(price)+frete
    
    const HandleSubmitOrder = async (e)=>{
        e.preventDefault()

        const payload = {
            frete,
            price,
            totalCost
        }
        
        setOrder(payload)

        if(user){
            history.push('/checkout')
        }else{
            history.push("/login")
            setVerificationLogin(true)
        }
        
    }
    
    return (
        <div className='orderForm'>
            <form onSubmit={HandleSubmitOrder}>
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
                                R$ {price}
                            </p>
                        </div>
                        <div className='container-p'>
                            <p>
                                Frete
                            </p>
                            <p>
                                R$ {frete.toFixed(2)}
                            </p>
                        </div>
                        <div className='container-select'>
                            <select>
                                <option>Frete 1</option>
                                <option>Frete 2</option>
                                <option>Frete 3</option>
                            </select>
                        </div>
                    </div>

                    <div className='orderForm-div-checkout'>
                        <h2>
                            Custo total
                        </h2>
                        <p>
                           R$ {totalCost} 
                        </p>
                    </div>
                    <SubmitButton id='submitButton-orderForm' value={"Continuar"}/>
                </div>
            </form>
        </div>
    )
}
