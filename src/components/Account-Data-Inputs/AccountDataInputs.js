import React from 'react'
import './AccountDataInputs.css'

export default function AccountDataInputs({Info}) {
    return (
        <>
        <div className='Data-Inputs'>
            <h1>{Info}</h1>
            <input type="text"/>
        </div>
        </>
    )
}
