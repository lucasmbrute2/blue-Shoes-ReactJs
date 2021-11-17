import "./Header.css" 
import blueShoes from "../assets/blueShoes.png"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/CtxApp"

export default function Header(){
    
    const { header, user } = useContext(Context)
    const [cartArray,setCartArray] = useState([])
    
    return(
        <div className='header header-height'>
            <div className='header-container container'>
                <Link to='/'>
                    <img src={blueShoes}className='header-logo'/>   
                </Link>
                <div className='header-div-input'>
                    <input type='text' placeholder='Procurar' className='header-searchBar'></input>
                    <i class="fas fa-search"></i>
                </div>
            
                <div className='header-div-nav'>
                    <nav className='header-nav'>
                        <ul className='header-ul'>
                            <li className='header-li'>
                                <Link to='/'className='link-fa'>
                                <i class="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className='header-li'>
                                {header? 
                                <Link to='/my-account' className='header-li-link'>
                                   <span className='header-li-span'>Olá,</span>{user.nome}
                                </Link> 
                                :<Link to='/login' className='header-li-link-signIn'>
                                    Entrar
                                </Link>}                            
                            </li>
                            <li className='header-li li-cart'>
                                <Link to='/cart'>
                                    <i class="fas fa-shopping-cart"></i>  
                                    <span className='header-li-cartArray'>
                                        {cartArray.length}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}