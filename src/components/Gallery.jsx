import ImageCard from "./ImageCard";
import galleryData from "../data/galleryData";
import {FiSearch} from "react-icons/fi";
import "./Gallery.css";
function Gallery({searchTerm,activeCategory,onOpen}){
  const searchValue=searchTerm.toLowerCase().trim();
  const filteredImages=galleryData.filter((item)=>{
    const matchesCategory=activeCategory==="All"||item.category===activeCategory;
    const matchesSearch=item.title.toLowerCase().includes(searchValue)||item.category.toLowerCase().includes(searchValue)||item.creator.toLowerCase().includes(searchValue)||item.description.toLowerCase().includes(searchValue);
    return matchesCategory&&matchesSearch;
  });
  return(
    <section className="gallery-section" id="collections">
      <div className="container">
        <div className="gallery-top">
          <span>{String(filteredImages.length).padStart(2,"0")} Visuals</span>
          <span>Curated Collection — 2026</span>
        </div>
        {filteredImages.length>0?(
          <div className="gallery-grid">
            {filteredImages.map((item,index)=>(
              <ImageCard key={item.id} item={item} index={index} onOpen={onOpen}/>
            ))}
          </div>
        ):(
          <div className="no-results">
            <span className="no-results-icon"><FiSearch/></span>
            <span className="no-results-number">00</span>
            <h3>No visual stories found.</h3>
            <p>Try another search word or select a different category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
export default Gallery;