import { Link } from "react-router-dom"
import { Api } from "../../../Api/Api"
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton"
import "./Register.css"

export default function Register(){
    
    const HandleSubmit = async (e)=>{
        e.preventDefault()
    
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const cpf = e.target.cpf.value
        const cep = e.target.cep.value

        const payload = {
            name,
            email,
            password,
            cpf,
            cep
        }
        
        const response = await Api.post('user/create',payload)
        const body = response.json()
    }
    
    return(
        <div className='register'>
            <form className='register-form' onSubmit={HandleSubmit}>              
                <div className='register-form-title'>
                    <Link to='/'>
                        <i class="fas fa-arrow-left"></i>
                    </Link>
                    <h2 className='form-h2'>Registrar</h2>
                </div>
                <div className='form-container-input'>
                    <div className='register-form-div'>
                        <input  className='register-input' placeholder='Nome' required name='name'></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input className='register-input' placeholder='Email' required name='email'></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input type='password' className='register-input ' placeholder='Senha' required name='password'></input>
                    </div>
                    <div className='register-form-div'>
                        <input className='register-input' placeholder='CPF' required name='cpf'></input>
                    </div>
                    <div className='register-form-div right'>
                        <input className='register-input' placeholder='CEP' required name='cep'></input>
                    </div>
                </div>
                    <div className='register-form-div-button'>
                        <SubmitButton id='button-submit'/>
                    </div>
            </form>
        </div>
    )
}