import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountDataInfos from '../../Account-Data-Infos/AccountDataInfos'
import EditDelete from '../../Buttons/Edit-Delete/EditDelete'
import Titles from '../../Titles/Titles'
import { Api } from '../../../Api/Api';
import './MyAccount.css'
import Header from '../../Header/Header'

export default function MyAccount(props) {
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

    return (
        <>
        <Header/>
        <div className='MyAccount-Container'>
            <div className='MyAccount'>
                <Titles
                Title='Seus dados'
                />
                <div className='MyAccount-Text'>
                    <AccountDataInfos
                    Info='Nome:'
                    dbInfo={user.name}
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
                    dbInfo={user.password}
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
