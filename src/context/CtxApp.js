import { useContext, useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"

const Context = createContext()

function CtxApp({ children }){
    const [jwt,setJwt, jwtRemove] = useLocalStorage('JWT','')
    const [user,setUser, userRemove] = useLocalStorage('user','')    
    const [header,setHeader] = useState(false)
    

    
    return(
        <Context.Provider value={{ header, setHeader, user, setUser, jwt, setJwt, jwtRemove, userRemove }}>
            {children}
        </Context.Provider>
    )
}
export function useJwt(){
    const context = useContext(Context)
    const { jwt, setJwt } = context
    return { jwt, setJwt }
}
export { Context, CtxApp }