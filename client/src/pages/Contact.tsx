import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { FaInstagram } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
const Contact=()=>{
    return(
        
        <>  
      <Navbar logo='https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/3eb06944-aca8-40f1-ad3a-509b04ae59bc/soilboy-logo_fa.png?format=1500w'
       fontColorClass="fontColorClass" instagram={ FaInstagram } 
       cart={ RiShoppingCartLine } colorOnScroll='green-color'
        turnwhite={{ filter: 'invert(1) brightness(100%)' }}
         buttonStyle={{border:" solid white 2px"}}/>
      <Header id='contact' divclassName='no-display' buttonClass="no-display" h3ClassName="no-display"/>
        <ContactForm/>
        
        </>
    )
}


export default Contact