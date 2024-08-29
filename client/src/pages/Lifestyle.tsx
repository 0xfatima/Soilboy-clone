
import Navbar from "../components/Navbar";
import { FaInstagram } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import ProductContainer from "../components/ProductsContainer";

const Lifestyle=()=>{
   
   

     return(
        <>
      <Navbar logo='https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/3eb06944-aca8-40f1-ad3a-509b04ae59bc/soilboy-logo_fa.png?format=1500w' instagram={ FaInstagram } cart={ RiShoppingCartLine } colorOnScroll='cream-color'  />
      <ProductContainer typeOfData="lifestyle"/>
        </>
     )
}

export default Lifestyle