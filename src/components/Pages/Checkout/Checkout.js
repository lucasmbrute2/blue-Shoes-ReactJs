import React from 'react'
import './Checkout.css'
import Footer from '../../Footer/Footer'
import { Field, Form, Formik } from 'formik'
import OrderFormCheckout from '../../OrderFormCheckout/OrderFormCheckout'


export default function Checkout() {
    
    function onBlurCep(e,setFieldValue){
        const { value } = e.target

        const cep = value?.replace(/[^0-9]/g,'');

        if(cep?.length !== 8){
           return;
        }

        fetch(`https://viacep.com.br/ws/${value}/json/`)  
        .then((res) => res.json()) 
        .then((data)=> {
            setFieldValue('rua', data.logradouro);
            setFieldValue('bairro', data.bairro);
            setFieldValue('cidade', data.localidade);
          });
    }
    return (
        <>
        <div>
            <div className='Cart header-height'>
            <div className="Cart-Container">
                <h1 className='Cart-Container-h1'>Seus itens</h1>
                <div className='cardProduct-div'>
                    <div className='cardProduct-div-details'>
                        <p className='CardProduct-div-details-p firstCard'>Detalhes</p>
                        <p className='CardProduct-div-details-p'>Quantidade</p>
                        <p className='CardProduct-div-details-p'>Preço</p>
                        <p className='CardProduct-div-details-p'>Total</p>
                        <div className='CardProduct-div-details-div'>
                            <img className='img-CardProduct' src="https://images.tcdn.com.br/img/img_prod/938519/180_tenis_nike_air_force_1_low_reflective_swoosh_2021_1_8a5c09e4c39fad02f606d8a53323487e_20210812081513.png"/>
                            <div className='items-description'>
                                <h3 className='items-description-h3'>AirForce 1</h3>
                                <p><span className='items-description-span'>Cor:</span> Azul</p>
                                <p><span className='items-description-span'>Tamanho: </span>39</p>
                            </div>
                        </div>
                        <div className='container-buttons'>
                            <p className='price-number'>1</p>
                        </div>
                        <p className='price-number'>99,90</p>         
                    </div>
                </div>
            </div>
            <OrderFormCheckout/>
            </div>
            <div className='Container-checkout'>
                <div className='Container-entrega'>
                <Formik
                validateOnMount
                initialValues={{
                  cep: '',
                  rua: '',
                  numero: '',
                  bairro: '',
                  cidade: '',
                }}
                    render={({isValid,  setFieldValue }) => (
                    <Form>
                        <h1>Endereço de entrega</h1>
                        <p>Cidade</p>
                        <Field  type="text" name="cidade"/>
                        <p>CEP</p>
                        <Field  type="text" name="cep" onBlur={(e) => onBlurCep(e,setFieldValue)}/>
                        <p>Bairro</p>
                        <Field  type="text" name="bairro"/>
                        <p>Rua</p>
                        <Field  type="text" name="rua"/>
                        <p>Número</p>
                        <Field  type="text" name="numero"/>
                    </Form>
                    )}
                    />
                </div>
                <div className='Container-pagamento'>
                    <h1>Pague por boleto</h1>
                    <p>Você poderá visualizar ou imprimir após a finalização do pedido. A data de vencimento é de 2 dias corridos após a conclusão do pedido. Após esta data, ele perderá a validade.</p>
                    <button>CONCLUIR PEDIDO COM BOLETO</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
