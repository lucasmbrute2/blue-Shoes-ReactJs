import React from 'react'
import './EditDelete.css'

export default function EditDelete({Title,className}) {
    return (
        <>
        <div className={className}>
            <button>{Title}</button>
        </div>
        </>
    )
}
