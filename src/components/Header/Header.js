import "./Header.css" 
import blueShoes from "../assets/blueShoes.png"
import { Link } from "react-router-dom"

export default function Header(){
    
    const userData = localStorage.getItem('user')
    const userDataObject = JSON.parse(userData)

    return(
        <div className='header '>
            <div className='header-container container'>
                <Link to='/'>
                    <img src={blueShoes}className='header-logo'/>   
                </Link>
                <div className='header-div-input'>
                    <input type='text' placeholder='search' className='header-searchBar'></input>
                    <i class="fas fa-search"></i>
                </div>
            
                <div className='header-div-nav'>
                    <nav className='header-nav'>
                        <ul className='header-ul'>
                            <li className='header-li'>
                                Home
                            </li>
                            <li className='header-li'>
                                Settings
                            </li>
                            <li className='header-li'>
                                {userDataObject? 
                                <Link to='/my-account' className='header-li-link'>
                                   <span className='header-li-span'>Olá,</span>{userDataObject.nome}
                                </Link> 
                                :<Link to='/login' className='header-li-link-signIn'>
                                    Entrar
                                </Link>}                            
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}