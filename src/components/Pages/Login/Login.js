import React from 'react'
import "./Login.css"; 
import { Link } from "react-router-dom";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton"
import { Api } from '../../../Api/Api';
import Header from '../../Header/Header';

export default function Login(props) {
    
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value

        const payload = {
            email,
            password
        }
    
        const response = await Api.post("auth/login",payload)
        const body = await response.json()
        console.log(typeof JSON.stringify(body.user))
        
        if (response.status===201){
           
            localStorage.setItem('JWT',body.token)
            localStorage.setItem('user',JSON.stringify(body.user))          
            console.log(body.user.id)
            props.history.push('/')
        
        }else{
            throw new Error()
        }
    }
    
    return (
        <div className='form-container'>
            <form className='form' onSubmit={HandleSubmit}>
                <h2 className='form-h2'>Entrar</h2>
                <div className='form-div'>
                    <input className='form-div-input' placeholder=' ' name='email' required></input>
                    <label className='form-div-label'>Email</label>
                </div>
            
                <div className='form-div'>
                    <input type='password' className='form-div-input' placeholder=' ' autoComplete={false} name='password' required></input>
                    <label className='form-div-label'>Senha</label>
                </div>
                <div>
                    <SubmitButton/>
                </div>
               
                <div className='form-div-links'>
                    <p className='form-div-links-p'>Não tem uma conta?<Link to='/register' className='form-button-links-link'>Cadastre aqui</Link></p>
                    <p className='form-div-links-p'>Lembrar minha senha</p>
                </div>
            </form>
        </div>
    )
}
