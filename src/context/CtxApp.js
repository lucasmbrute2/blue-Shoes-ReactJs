import { useState } from "react";
import { createContext } from "react";

const Context = createContext()

function CtxApp({ children }){
    const [header,setHeader] = useState(false)
    
    return(
        <Context.Provider value={{ header,setHeader }}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }