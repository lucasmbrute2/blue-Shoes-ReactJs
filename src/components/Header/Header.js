import "./Header.css" 
import blueShoes from "../assets/blueShoes.png"
import { Link, Redirect, useHistory } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/CtxApp"
import HeaderCartIcon from "../HeaderCartIcon/HeaderCartIcon"
import { Api } from "../../Api/Api"



export default function Header(props){

    const history = useHistory()
    const { user, setProduct } = useContext(Context) 
    
    
   
    const goLogin = async (e)=> {
        e.preventDefault()
        
        const searchProduct = e.target.searchProduct.value
        
        const response = await Api.getAll(`produto?nome=${searchProduct}`)
        const body = await response.json()
        setProduct(body)
        history.push('/products')
 
    }
    
    return(
        <div className='header header-height'>
            <div className='header-container container'>
                <Link to='/'>
                    <img src={blueShoes}className='header-logo'/>   
                </Link>
                <div className='header-div-input'>
                    <form onSubmit={goLogin}>                        
                        <input type='text' placeholder='Procurar' className='header-searchBar' name='searchProduct'></input>
                        <i class="fas fa-search"></i>
                        <input type='submit' style={{ width: 0, height: "0", border: "none" }}></input>
                    </form>
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
                                {user? 
                                <Link to='/my-account' className='header-li-link'>
                                   <span className='header-li-span'>Olá,</span>{user.nome}
                                </Link> 
                                :<Link to='/login' className='header-li-link-signIn'>
                                    Entrar
                                </Link>}                            
                            </li>
                            <li className='header-li li-cart'>
                                <Link to='/cart'>
                                    <HeaderCartIcon/>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}