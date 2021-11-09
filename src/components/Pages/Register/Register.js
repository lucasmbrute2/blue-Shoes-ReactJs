import { Link } from "react-router-dom"
import { Api } from "../../../Api/Api"
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton"
import "./Register.css"

export default function Register(props){
    
    const HandleSubmit = async (e)=>{
        e.preventDefault()
    
        const nome = e.target.nome.value
        const sobrenome = e.target.sobrenome.value
        const email = e.target.email.value
        const senha = e.target.senha.value
        const cpf = e.target.cpf.value

        const payload = {
            nome,
            sobrenome,
            email,
            senha,
            cpf
        }
        
        const response = await Api.post('usuario/criar',payload)
    
        if(response.status ===201){
            
            const payloadLogin = {
                email: payload.email,
                senha: payload.senha
            }
            
            const response = await Api.post('auth/login',payloadLogin,true)
            const body = await response.json()

            localStorage.setItem('JWT',body.token)
            localStorage.setItem('user',JSON.stringify(body.usuario))
            props.history.push('/')
        
        }else{
            alert('Algo deu errado!')
        }
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
                        <input  className='register-input' placeholder='Nome' required name='nome'></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input className='register-input' placeholder='Sobrenome' required name='sobrenome'></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input className='register-input' placeholder='Email' required name='email'></input>
                    </div>
                    <div className='register-form-div' placeholder=' '>
                        <input type='password' className='register-input ' placeholder='Senha' required name='senha'></input>
                    </div>
                    <div className='register-form-div'>
                        <input className='register-input' placeholder='CPF' required name='cpf'></input>
                    </div>
                </div>
                    <div className='register-form-div-button'>
                        <SubmitButton id='button-submit'/>
                    </div>
            </form>
        </div>
    )
}