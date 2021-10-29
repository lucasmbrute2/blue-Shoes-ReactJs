import React from 'react'
import { Link } from 'react-router-dom'
import AccountDataInputs from '../../components/Account-Data-Inputs/AccountDataInputs'
import EditDelete from '../../components/Buttons/Edit-Delete/EditDelete'
import Titles from '../../components/Titles/Titles'

export default function MyAccountEdit() {
    return (
        <>
        <div className='MyAccount-Container'>
            <div className='MyAccount'>
                <Titles
                Title='Seus dados'
                />
                <div className='MyAccount-Text'>
                    <AccountDataInputs
                    Info='Nome'
                    />
                    <AccountDataInputs
                    Info='Data de nascimento'
                    />
                    <AccountDataInputs
                    Info='Email'
                    />
                    <AccountDataInputs
                    Info='Telefone'
                    />
                    <AccountDataInputs
                    Info='CPF'
                    />
                    <AccountDataInputs
                    Info='CEP'
                    />
                    <AccountDataInputs
                    Info='Senha'
                    />
                    <AccountDataInputs
                    Info='Número'
                    />
                </div>
                <div className='Button-Container'>
                    <Link to='my-account'>
                        <EditDelete
                        Title='VOLTAR'
                        className='Button-Edit'
                        />
                    </Link>
                    <EditDelete
                    Title='DELETAR'
                    className='Button-Delete'
                    />
                </div>
            </div>
        </div>
        </>
    )
}
