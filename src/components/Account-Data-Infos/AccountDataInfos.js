import React from 'react'
import './AccountDataInfos.css'

export default function AccountDataInfos({Info,dbInfo}) {
    return (
        <>
        <div className='Data-Infos'>
            <h1>{Info}</h1>
            <h2>{dbInfo}</h2>
        </div>
        </>
    )
}
