import { Link } from "react-router-dom"
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton"
import "./Register.css"

export default function Register(){
    return(
        <div className='register'>
            <form className='register-form'>
                
                <div className='register-form-title'>
                    <Link to='/'>
                        <i class="fas fa-arrow-left"></i>
                    </Link>
                    <h2 className='form-h2'>Registrar</h2>
                </div>
                <div className='form-container-input'>
                    <div className='register-form-div'>
                        <input  className='register-input' placeholder='Nome' required></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input className='register-input' placeholder='Email' required></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input type='password' className='register-input ' placeholder='Senha' required></input>
                    </div>
                    <div className='register-form-div'>
                        <input className='register-input' placeholder='CPF' required></input>
                    </div>
                    <div className='register-form-div right' >
                        <input type='date' className='register-input' placeholder='Data de nascimento' required></input>
                    </div>
                    <div className='register-form-div right'>
                        <input className='register-input' placeholder='Telefone' required></input>
                    </div>
                    <div className='register-form-div right'>
                        <input className='register-input' placeholder='CEP' required></input>
                    </div>
                </div>
                    <div className='register-form-div-button'>
                        <SubmitButton id='button-submit'/>
                    </div>
            </form>
        </div>
    )
}