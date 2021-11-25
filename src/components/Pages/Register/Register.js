import { useContext } from "react"
import { Link } from "react-router-dom"
import { Api } from "../../../Api/Api"
import { Context } from "../../../context/CtxApp"
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton"
import "./Register.css"

export default function Register(props){
   
    const { setHeader, setUser, setJwt} = useContext(Context)
    
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
        
        if(props.history.location.pathname ==='/register/admin'){
          
            var url = 'usuario/adm'
             
        }else{
            var url = 'usuario'
            
        }
        
        const response = await Api.post(url,payload,true)
        const body = await response.json()
        if(response.status ===201){
            
            const payloadLogin = {
                email: payload.email,
                senha: payload.senha
            }
            
            const response = await Api.post('auth/login',payloadLogin,true)
            const body = await response.json()
            setJwt(body.token)
            setUser(body.usuario)
            props.history.push('/')
            
        }else{
            alert(response.error)
        }
           
    }
    
    return(
        <div className='register'>
            <form className='register-form' onSubmit={HandleSubmit}>              
                <div className='register-form-title'>
                    <Link to='/login'>
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