import "./Brands.css"
import { useEffect, useState } from "react"
import { Api } from "../../Api/Api"

export default function Brands(){
    const [brands, setBrand] = useState([])

    useEffect(() => {
        const loadBrandList = async () => {
            const response = await Api.getAll("produto/todos",true);
            const results = await response.json();
            setBrand(results);
        };

       loadBrandList();
    }, []);

    const brandsUnicos = new Map();

    brands.forEach((brand) => {
        if (!brandsUnicos.has(brand.logo)){
             brandsUnicos.set(brand.logo,brand);
        }
    })
    
    const unico = [...brandsUnicos.keys()]

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
                {unico.map(brand=>(
                    <img src={brand} className='card-logo'></img>            
                ))} 
            </div>
        </div>
        </>
    )
}