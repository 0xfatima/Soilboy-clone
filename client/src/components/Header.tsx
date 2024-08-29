interface propType{
  id:string;
  divclassName:string;
  h3ClassName?:string;
  buttonClass:string

}

function Header(props:propType) {


  return (
    <section id={props.id} className="custom-section">

         <div className={props.divclassName}> 
            <h3 >'As interesting <br /> as a plant'</h3>
            <button className="no-padding">Shop Now</button>
         </div>
    </section>
  )
}

export default Header
