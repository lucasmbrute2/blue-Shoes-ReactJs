import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../../Api/Api'
import AccountDataInputs from '../../Account-Data-Inputs/AccountDataInputs'
import EditDelete from '../../Buttons/Edit-Delete/EditDelete'
import Titles from '../../Titles/Titles'
import './MyAccountEdit.css'


export default function MyAccountEdit() {
    
    const userData = localStorage.getItem("user")
    const { id } = JSON.parse(userData)

    const [user, setUser] = useState([]);
    useEffect(() => {
        const loadUser = async () => {
            const response = await Api.getById("usuario",id,true)
            const body = await response.json();
            setUser(body);
        };
        loadUser();
    }, []);

    const HandleSubmit = async (e)=>{
        e.preventDefault()
        
        const nome = e.target.nome.value
        const email = e.target.email.value
        const senha = e.target.senha.value
        const cpf = e.target.cpf.value

        const payload = {
            nome,
            email,
            senha,
            cpf
        }
    
        const response = await Api.update("usuario/atualizar",payload,id,true)
        const body = await response.json();
        setUser(body);
        console.log(body);

        if (response.status === 200) {
            alert("Dados atualizados com sucesso")
            
        } else {
            alert("Aconteceu algum erro!!!")
        }
        console.log({response})
    }
    return (
        <>
        <div className='MyAccount-Container'>
            <form onSubmit={HandleSubmit}>
                <div className='MyAccountEdit'>
                    <Titles
                    Title='Seus dados'
                    />
                    <div className='MyAccount-Text'>
                        <div className='Data-Inputs'>
                            <h1>Nome</h1>
                            <input type="text" name='nome' defaultValue={user.nome}/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>Email</h1>
                            <input type="text" name='email' defaultValue={user.email} readonly/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>CPF</h1>
                            <input type="text" name='cpf' defaultValue={user.cpf} readonly/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>Senha</h1>
                            <input type="text" name='senha' defaultValue={user.senha}/>
                        </div>
                    </div>
                    <div className='Button-Container'>
                        <Link to='my-account'>
                            <EditDelete
                            Title='VOLTAR'
                            className='Button-Edit'
                            />
                        </Link>
                        <EditDelete
                        Title='ATUALIZAR'
                        className='Button-Edit'
                        />
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
