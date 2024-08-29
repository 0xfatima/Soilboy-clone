import {imagePaths} from "./ImageData"
function Featured(){
    return(
        
        <section className="featured-prod ">
            <div className="featured-div-1">
                <h3>Featured Products</h3>
            <button>View All</button>
            </div>
            <div className="featured-div-2">
            {imagePaths.map((obj,index)=>(
                <div key={index} className="card">
                    <img src={obj.image}  alt={obj.alt} className="card-img" />
                    <h4>{obj.name}</h4>
                    <p>{obj.price}</p>
                </div>
            ))}
                
            </div>
        </section>
        
    )
}

export default Featured