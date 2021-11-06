import "./Brands.css"
import Nike from "../assets/nike.png"

export default function Brands(){
    return(
        <div className='brands'>
            <div>
                <img src={Nike}/>
            </div>
            <div>
                <img/>
            </div>
            <div>
                <img/>
            </div>
        </div>
    )
}