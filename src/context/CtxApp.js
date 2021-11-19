import { useContext, useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use"

const Context = createContext()

function CtxApp({ children }){
    
    const [jwt,setJwt, jwtRemove] = useLocalStorage('JWT',null)
    const [user,setUser, userRemove] = useLocalStorage('user', undefined)    
    const [cartLocal, setCartLocal] = useLocalStorage('cart',{produtos:[]})
    const [cart,setCart] = useState(undefined)   
     
    return(
        <Context.Provider value={{ user, setUser, jwt, setJwt, jwtRemove, userRemove, cart, setCart, cartLocal ,setCartLocal }}>
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