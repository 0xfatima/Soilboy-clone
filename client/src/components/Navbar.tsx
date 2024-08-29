import { useNavigate,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';

interface propType{
  logo:string;
  instagram:IconType;
  cart:IconType;
  fontColorClass?:string;
  colorOnScroll:string;
  turnwhite?:React.CSSProperties;
  buttonStyle?:React.CSSProperties;
}

function Navbar(props:propType) {
  const [scroll, setScroll]=useState(false);
  const [lastScroll,setLastScroll]=useState(0)

  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScroll = window.scrollY;
  
    if (currentScroll > 80) {
      if (currentScroll < lastScroll) {
        // Scrolling up and past a certain point
        setScroll(true);
      } else {
        // Scrolling down
        setScroll(false);
      }
    } else {
      // Scrolling back to the top
      setScroll(false);
    }
  
    setLastScroll(currentScroll);
  };
    useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
      return()=> window.removeEventListener('scroll',handleScroll)
    },[lastScroll])
  

  const handleClick=()=>{
      navigate('/contact')
  }

    return (
      <>
        <nav className={scroll ? `scrolled ${props.colorOnScroll} ${props.fontColorClass}` : ''}>
              <div className={scroll ? `Nav ${props.colorOnScroll} ${props.fontColorClass} ` : `Nav ${props.fontColorClass}`}>
              <ul className= {scroll ? 'nav-in pad-left' : 'nav-in'}>
                  <li className='no-padding'><p>Plants</p></li>
                  <li className='no-padding'><p> <Link to="/workshops" className='custom-link '>Workshops</Link></p></li>
                  <li className='no-padding'><p><Link to="/lifestyle" className='custom-link'>Lifestyle</Link></p></li>
              </ul>
              <div><Link to="/"><img  className={`head`} src={props.logo} alt="logo" style={props.turnwhite} /></Link></div>
              <ul className={scroll ? 'nav-in pad-right' : 'nav-in'}>
                  <li className='no-padding'><p>Login</p></li>
                  <li className='icon'><props.instagram /></li>
                  <li className='icon'><props.cart/></li>
                  <li className='no-padding'><button className={`${props.fontColorClass}`} onClick={handleClick} style={props.buttonStyle}>Contact us</button></li>
              </ul>
              </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  