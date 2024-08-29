import { FaInstagram } from "react-icons/fa";
import {Input,RadioButton} from "./Input-box";
const contactForm = ()=>{
    return(
      <section className="contact-form custom-section-no-100vh  ">
        <div className="con con1" >
            <h1 className="no-padding">
            Contact us.
            </h1>
            <div>
                <p>Physical Store</p>
                <p>46 Kim Yam Road, #02-07/08</p>
                <p>Singapore 239351</p>
            </div>
            <FaInstagram className="con-instagram" />
        </div>


        <div className="con con2">
        <form action="">
        
          <div className="name-name-div ">
          <h3>Name <span className="req">(required)</span></h3>
          <div className="name-div margin-bottom">
          <Input type="text" styles={{height:"7vh", width:"20vw"}} name="fname" label="First Name" classType="input-column-component"/>
          <Input type="text" styles={{height:"7vh", width:"20vw"}} name="lname" label="Last Name" classType="input-column-component" />
          </div>
          </div>

          
          <div className="email-div margin-bottom">
          <h3 className="h3-no-margin">Email <span className="req">(required)</span></h3>
          <Input type="text" styles={{height:"7vh", width:"42vw"}} name="email" classType="input-column-component"  />
          </div>
          
          <div className="interest-div margin-bottom">
              <h3>Interest in</h3>
              <RadioButton type="radio" name="Interest" classType="input-row-component" id="general" label="General Enquiries"  />
              <RadioButton type="radio" name="Interest" classType="input-row-component" id="general" label="Collaboration"  />
              <RadioButton type="radio" name="Interest" classType="input-row-component" id="general" label="Workshop"  />
              <RadioButton type="radio" name="Interest" classType="input-row-component" id="general" label="Corporate"  />
              <RadioButton type="radio" name="Interest" classType="input-row-component" id="general" label="Career"  />
          </div>

          <div className="message-div">
          <h3>Message <span className="req">(required)</span></h3>
          <Input type="text" styles={{height:"18vh", width:"42vw"}} name="message" classType="input-column-component"  />

          </div>
          <button>SEND</button>

        </form>
        </div>
      </section>
    )
}

export default contactForm