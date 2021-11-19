import { useContext, useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"

const Context = createContext()

function CtxApp({ children }){
    const [jwt,setJwt, jwtRemove] = useLocalStorage('JWT','')
    const [user,setUser, userRemove] = useLocalStorage('user','')    
    const [cartLocal, setCartLocal] = useLocalStorage('cart',{user,produtos:[]})
    
    const [cart,setCart] = useState(undefined)   
    const [toggle,setToggle] =useState(true)
     
    return(
        <Context.Provider value={{ toggle, setToggle, user, setUser, jwt, setJwt, jwtRemove, userRemove, cart ,cart, setCart, cartLocal ,setCartLocal }}>
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