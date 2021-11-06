import React from 'react'
import "./Footer.css"; 
import "../styles/styles.css"

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-container container'>
                <div className='footer-container-div first'>
                    <p className='footer-container-div-p'>FRETE GRÁTIS <i className="fas fa-truck fa-truck" ></i></p>                    
                </div>    

                <div className='footer-container-div second'>
                    <p className='footer-container-div-p'>EM ATÉ 12X SEM JUROS <i className="far fa-credit-card fa-card"></i></p>                  
                </div>    
                 <div className='footer-container-div third'>
                    <p className='footer-container-div-p'>ENTREGA RÁPIDA <i className="fas fa-biking fa-bike"></i></p>
                </div>    
            
                <div className='footer-container-div fourth'>
                    <p className='footer-container-div-bottom'>Ajuda</p>
                    <p className='footer-container-div-bottom'>Ajuda e suporte</p>
                    <p className='footer-container-div-bottom'>Perguntas frequentes</p>
                    <p className='footer-container-div-bottom'>Fale conosco</p>
                </div>
                
                <div className='footer-container-div fifth'>
                    <span><p className='footer-container-div-bottom'>Institucional</p></span>
                    <p className='footer-container-div-bottom'>Sobre nós</p>
                    <p className='footer-container-div-bottom'>Política de privacidade</p>
                </div>
                <div className='footer-container-div sixth'>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}