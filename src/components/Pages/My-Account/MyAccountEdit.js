import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../../../Api/Api'
import AccountDataInputs from '../../Account-Data-Inputs/AccountDataInputs'
import EditDelete from '../../Buttons/Edit-Delete/EditDelete'
import Navbar from '../../Header/Navbar'
import Titles from '../../Titles/Titles'
import './MyAccountEdit.css'


export default function MyAccountEdit() {
    const id = localStorage.getItem("userId")

    const [user, setUser] = useState([]);
    useEffect(() => {
        const loadUser = async () => {
            const response = await Api.getById("user/single",id,true)
            const body = await response.json();
            setUser(body);
            console.log(body);
        };
        loadUser();
    }, [id]);

    const HandleSubmit = async (e)=>{
        e.preventDefault()
        
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const cpf = e.target.cpf.value

        const payload = {
            name,
            email,
            password,
            cpf,
        }
    
        const response = await Api.update("user/update/",payload,id,true)
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
        <Navbar/>
        <div className='MyAccount-Container'>
            <form onSubmit={HandleSubmit}>
                <div className='MyAccountEdit'>
                    <Titles
                    Title='Seus dados'
                    />
                    <div className='MyAccount-Text'>
                        <div className='Data-Inputs'>
                            <h1>Nome</h1>
                            <input type="text" name='name' defaultValue={user.name}/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>Email</h1>
                            <input type="text" name='email' value={user.email} readonly/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>CPF</h1>
                            <input type="number" name='cpf' value={user.cpf} readonly/>
                        </div>
                        <div className='Data-Inputs'>
                            <h1>Senha</h1>
                            <input type="text" name='password' defaultValue={user.password}/>
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
