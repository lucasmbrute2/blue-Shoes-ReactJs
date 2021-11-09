import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountDataInfos from '../../Account-Data-Infos/AccountDataInfos'
import EditDelete from '../../Buttons/Edit-Delete/EditDelete'
import Titles from '../../Titles/Titles'
import { Api } from '../../../Api/Api';
import './MyAccount.css'

export default function MyAccount(props) {
    
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

    return (
        <>
        <div className='MyAccount-Container'>
            <div className='MyAccount'>
                <Titles
                Title='Seus dados'
                />
                <div className='MyAccount-Text'>
                    <AccountDataInfos
                    Info='Nome:'
                    dbInfo={user.nome}
                    />
                    <AccountDataInfos
                    Info='Email:'
                    dbInfo={user.email}
                    />
                    <AccountDataInfos
                    Info='CPF:'
                    dbInfo={user.cpf}
                    />
                    <AccountDataInfos
                    Info='Senha:'
                    dbInfo={user.senha}
                    />
                </div>
                <div className='Button-Container'>
                    <Link to='my-account-edit'>
                    <EditDelete
                    Title='EDITAR'
                    className='Button-Edit'
                    />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
