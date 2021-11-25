import "./Brands.css"
import { useContext, useEffect, useState } from "react"
import { Api } from "../../Api/Api"
import { Context } from "../../context/CtxApp"
import { useHistory } from "react-router"
import BrandUnique from "../BrandUnique/BrandUnique"

export default function Brands(){
    const history = useHistory()
    const [brands, setBrand] = useState([])
    const { user, setProduct } = useContext(Context) 

    useEffect(()=>{
        const loadBrandList = async () => {
            const response = await Api.getAll("marca/todas",true);
            const results = await response.json();
            setBrand(results);
        }
        loadBrandList();
    },[])
    
    if (!brands){
        <div>
            loading...
        </div>
    }
    return(
        <>
        <div className="brands-title">
            <h1>Marcas parceiras</h1>
        </div>
        <div className='brands'>
            <div className='brands'>
                {/* <img src={brand} className='card-logo' name='brandName'></img>  */} 
                {brands.map((brand,index)=>(
                    <BrandUnique
                    key={index}
                    brand={brand}
                    />         
                ))} 
            </div>
        </div>
        </>
    )
}