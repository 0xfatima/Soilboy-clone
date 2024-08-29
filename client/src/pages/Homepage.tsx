import Header from '../components/Header'
import Featured from '../components/FeaturesProducts'
import Pebble from '../components/SoilboyPebbles'
import Prod from '../components/OtherProducts'
import Screen from '../components/Screen'
import Gallery from '../components/Gallary'
import Tagline from '../components/Tagline'
import Navbar from '../components/Navbar'
import { FaInstagram } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

function Homepage() {


  return (
    <>
      <Navbar logo='https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/3eb06944-aca8-40f1-ad3a-509b04ae59bc/soilboy-logo_fa.png?format=1500w' instagram={ FaInstagram } cart={ RiShoppingCartLine } colorOnScroll='cream-color'  />
      <Header id='home' divclassName='homepage-text ' buttonClass="no-padding"/>
      <Featured/>
      <Pebble/>
      <Prod/>
      <Screen/>
      <Gallery/>
      <Tagline/>
    </>
  )
}

export default Homepage