import React, { useContext, useEffect, useState } from 'react'
import AccountDataInfos from '../../Account-Data-Infos/AccountDataInfos'
import Titles from '../../Titles/Titles'
import { Api } from '../../../Api/Api';
import './MyAccount.css'
import { Context } from '../../../context/CtxApp';

export default function MyAccount(props) {
    
    const { user } = useContext(Context)
    const  id = user? user.carrinho.id : null
    
    const [userAccount, setUser] = useState([]);
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
                    dbInfo={userAccount.nome}
                    />
                    <AccountDataInfos
                    Info='Email:'
                    dbInfo={userAccount.email}
                    />
                    <AccountDataInfos
                    Info='CPF:'
                    dbInfo={userAccount.cpf}
                    />
                </div>
            </div>
        </div>
        </>
    )
}
