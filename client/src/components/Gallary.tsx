 import { galleryData } from "./ImageData"
function Gallery(){
    return(
      <>
      <section className="gallery ">
          <div className="gallery-container no-padding ">
              {
                galleryData.map((data,index)=>(
                   <div key={index} className="gal-img no-padding">
                    <img src={data.image} alt="gallery-images" />
                    </div>
                ))
              }
          </div>
  
      </section>
      </>
    )
  }
  
  export default Gallery