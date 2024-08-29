import { prodData } from "./ImageData"

function Prod(){
    return(
        <>
            
                <section className="Prod">
                    <div className="other-products ">
                        <div className="image left">
                        <img className="first-div custom-section" src="https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/dbad8c1c-c95b-4db3-b4fd-f629ce1662d3/IMG_7887_2.jpg?format=1500w" alt="main-img" /></div>
                        <div className="content right no-padding">
                            <p className="no-padding">Introducing Soilboy Pebbles in different Colours. Crafted with Handcrafted by Gaonyou Ceramics – South Korea 
                            Limited quantities available.</p>
                            <button className="Button">Shop now</button>
                        </div>
                    </div>
                {prodData.map((data,index)=>(
                    <div className="other-products custom-section" key={index}>
                        <div className={`image ${data.imageLeft?'left':'right'}`}>
                            <img src={data.image} alt="img" />
                        </div>
                       <div className={`content ${data.imageLeft?'right':'left'} `}>
                        <h3>{data.content}</h3>
                        {data.isButton?(<button >{data.button}</button>):(
                            <div className="notButton">{data.button}</div>
                            )}
                        
                       </div>
                    </div>
                ))}
                </section>
        
        </>
    )
}

export default Prod