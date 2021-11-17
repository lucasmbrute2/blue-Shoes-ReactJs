import "./Brands.css"
import Swoosh from "../assets/swoosh-medium.png"
import Puma from "../assets/puma.png"
import Adidas from "../assets/adidas.png"

export default function Brands(){
    return(
        <div className='brands'>
            <div className='brands'>
                <div>
                    <img src={Swoosh} className='logo-img'/>
                </div>
                <div>
                    <img src={Puma} className='logo-img'/>
                </div>
                <div>
                    <img src={Adidas} className='logo-img'/>
                </div>
            </div>
        </div>
    )
}