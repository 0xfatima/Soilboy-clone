import { useState,useEffect } from "react"
import { Product } from "./types";
import { useNavigate } from "react-router-dom";
  interface propType{
    typeOfData:string
  }

const ProductContainer=(props:propType)=>{

    const navigate=useNavigate();
    const [Data,setData]= useState<Product[]>([])
    const [hovering,setHovering]=useState<number|null>(null)

    const handleMouseEnter=(index:number)=>{
        setHovering(index);
    }
    const handleMouseLeave=()=>{
        setHovering(null)
    }
    const handleClick=(product:Product)=>{
            navigate(`/description/${product.name}`)
         
    }

   useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:3000/data");
          const json = await res.json();
          console.log(json);
          if (json.products && Array.isArray(json.products)) {
            setData(json.products);
          } else {
            console.error("Fetched data does not contain 'products' array:", json);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    return(
        <div className="workshop-grid-container custom-section-no-100vh">
        {Data.map((product,index)=>{
         if(product.type===props.typeOfData){
           return(
            <div key={index} className="workshop-items" onClick={()=>handleClick(product)}>
                 
                  <img onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={handleMouseLeave} 
                  src={hovering===index?product.image1:product.thumbnail} alt="Fatima Azeemi" />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                
           </div>
           )
         }
         else{
            return null
         }
        })}
        </div>
    )
}

export default ProductContainer