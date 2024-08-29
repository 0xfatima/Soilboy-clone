import React,{useEffect,useState}from "react"
import { useParams } from "react-router-dom"
import { Product } from "../components/types"
import Navbar from "../components/Navbar"
import { FaInstagram } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
const Description:React.FC=()=>{

    const {productName}=useParams<{productName:string}>();
    const [product,setProduct]= useState<Product|undefined>(undefined)
    
    useEffect(()=>{
        const fetchProduct=async ()=>{
            try{
                const res= await fetch(`http://localhost:3000/data?name=${productName}`);
            const data= await res.json();
            if (data.product) {
                setProduct(data.product);
            } else {
                console.log("Product not found");
            }

            }catch(error){
               console.log("!!!!:   "+ error)
            }

        }

        fetchProduct()
    },[productName])


    if (!product) {
        return <div>Loading...</div>;
      }
    
    return(
        <>
        <Navbar logo='https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/3eb06944-aca8-40f1-ad3a-509b04ae59bc/soilboy-logo_fa.png?format=1500w' instagram={ FaInstagram } cart={ RiShoppingCartLine } colorOnScroll='cream-color'  />

        <div className="custom-section-no-100vh description-container">
            <div className="description-sub-contanier">
            <div className="details">
                <h3>
            {product.name}
            </h3>
            <h5>
                {product.price}
            </h5>
            <p>
                {product.description}
            </p>
            {product.duration && <p className="bold-p">Duration: {product.duration}</p> }
            {product.time && <p className="bold-p">Date/Time: {product.time}</p>}
            {(product.location && <p className="bold-p less-width gap">Location: {product.location}</p>)||
            (product.size && <p className="bold-p gap">Dimensions: {product.size}</p>)}
            <button>{product.size && "Buy Now"|| product.location && "Book Now"}</button>
            </div>
            <div className="carousel">
                <img src={product.thumbnail} alt="" />
            </div>
            </div>
            <div className="images-div">
                <div className="two-image">
                <div className="image1"><img src={product.image1} alt="" className="img image-width float-right"/></div>
                <div className="image2"><img src={product.image2} alt="" className="img image-width-left float-left"/></div>
                </div>
                <div className="image3"><img src={product.image3} alt="" className="img2 images-width float-right"/></div>
            </div>
        </div>
        </>
    )
}

export default Description;