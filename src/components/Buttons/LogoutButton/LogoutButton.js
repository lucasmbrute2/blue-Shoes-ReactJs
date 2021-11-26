import { useContext } from "react"
import { Context } from "../../../context/CtxApp"
import "./LogoutButton.css"
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useState } from "react";

export default function LogoutButton(){
    

    const [modal, setModal] = useState(false);

    const { setUser } = useContext(Context)

    const handleModal = ()=>{
        setModal(false)
        setUser(null)
    }
    return(
        <div>
            <p onClick={()=>setModal(true)} className='logout-p'>Sair</p>
            <PureModal
                width='400px'

                isOpen={modal}
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
                <div>
                    <p className='modal-title'>Realmente deseja sair ?</p>
                </div>
                <div className='modal-container'>
                    <p className='modal-container-p' onClick={()=>setModal(false)}>Cancelar</p>
                    <p className='modal-container-p logout' onClick={handleModal}>Sair</p>
                </div>
            </PureModal>
      </div>
    )
}