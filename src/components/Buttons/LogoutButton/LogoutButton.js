import { useContext } from "react"
import { Context } from "../../../context/CtxApp"
import "./LogoutButton.css"

export default function LogoutButton(){
    
    const { setUser } = useContext(Context)
    
    return(
        <div onClick={()=>setUser(null)}>
            Logout
        </div>
    )
}