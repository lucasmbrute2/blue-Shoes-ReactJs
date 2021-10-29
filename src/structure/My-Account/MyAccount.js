import React from 'react'
import { Link } from 'react-router-dom'
import AccountDataInfos from '../../components/Account-Data-Infos/AccountDataInfos'
import EditDelete from '../../components/Buttons/Edit-Delete/EditDelete'
import Titles from '../../components/Titles/Titles'
import './MyAccount.css'
export default function MyAccount() {
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
                    dbInfo='{Nome}'
                    />
                    <AccountDataInfos
                    Info='Data de nascimento:'
                    dbInfo='{Data}'
                    />
                    <AccountDataInfos
                    Info='Email:'
                    dbInfo='{Email}'
                    />
                    <AccountDataInfos
                    Info='Telefone:'
                    dbInfo='{Telefone}'
                    />
                    <AccountDataInfos
                    Info='CPF:'
                    dbInfo='{CPF}'
                    />
                    <AccountDataInfos
                    Info='CEP:'
                    dbInfo='{CEP}'
                    />
                    <AccountDataInfos
                    Info='Senha:'
                    dbInfo='{Senha}'
                    />
                    <AccountDataInfos
                    Info='Número:'
                    dbInfo='{Número}'
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
