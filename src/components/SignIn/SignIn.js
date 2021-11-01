import { Link } from "react-router-dom"
import "./SignIn.css"
export default function SignIn(){
    return(
    <div className='form-container'>
        <form className='form'>
            <h1 className='form-h1'>Entrar</h1>
            <div className='form-div'>
                <input className='form-div-input' placeholder=' '></input>
                <label className='form-div-label'>Email</label>
            </div>
        
            <div className='form-div'>
                <input className='form-div-input' placeholder=' ' autoComplete={false}></input>
                <label className='form-div-label'>Senha</label>
            </div>
            <div>
                <input type='submit' className='form-button' autoComplete={false}></input>
            </div>
            <div className='form-div-links'>
                <p className='form-div-links-p'>Não tem uma conta?<Link to='/register' className='form-button-links-link'>Cadastre aqui</Link></p>
                <p className='form-div-links-p'>Lembrar minha senha</p>
            </div>
        </form>
    </div>
    )
}