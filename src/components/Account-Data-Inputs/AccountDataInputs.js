import React from 'react'
import './AccountDataInputs.css'

export default function AccountDataInputs({Info,defaultValue}) {
    return (
        <>
        <div className='Data-Inputs'>
            <h1>{Info}</h1>
            <input type="text" value={defaultValue}/>
        </div>
        </>
    )
}
