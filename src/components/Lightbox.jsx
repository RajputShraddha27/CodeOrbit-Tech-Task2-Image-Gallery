import {useEffect} from "react";
import {FiArrowLeft,FiArrowRight,FiX} from "react-icons/fi";
import galleryData from "../data/galleryData";
import "./Lightbox.css";
function Lightbox({selectedImage,setSelectedImage}){
  useEffect(()=>{
    if(!selectedImage)return;
    const handleKeyDown=(event)=>{
      const currentIndex=galleryData.findIndex((item)=>item.id===selectedImage.id);
      if(event.key==="Escape"){
        setSelectedImage(null);
      }
      if(event.key==="ArrowRight"){
        const nextIndex=(currentIndex+1)%galleryData.length;
        setSelectedImage(galleryData[nextIndex]);
      }
      if(event.key==="ArrowLeft"){
        const previousIndex=(currentIndex-1+galleryData.length)%galleryData.length;
        setSelectedImage(galleryData[previousIndex]);
      }
    };
    document.body.style.overflow="hidden";
    window.addEventListener("keydown",handleKeyDown);
    return()=>{
      document.body.style.overflow="";
      window.removeEventListener("keydown",handleKeyDown);
    };
  },[selectedImage,setSelectedImage]);
  if(!selectedImage){
    return null;
  }
  const currentIndex=galleryData.findIndex((item)=>item.id===selectedImage.id);
  const showPreviousImage=()=>{
    const previousIndex=(currentIndex-1+galleryData.length)%galleryData.length;
    setSelectedImage(galleryData[previousIndex]);
  };
  const showNextImage=()=>{
    const nextIndex=(currentIndex+1)%galleryData.length;
    setSelectedImage(galleryData[nextIndex]);
  };
  const closeLightbox=()=>{
    setSelectedImage(null);
  };
  return(
    <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={`Viewing ${selectedImage.title}`}>
      <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image"><FiX/></button>
      <div className="lightbox-content" onClick={(event)=>event.stopPropagation()}>
        <div className="lightbox-image-area">
          <img src={selectedImage.image} alt={selectedImage.title}/>
          <span className="lightbox-count">{String(currentIndex+1).padStart(2,"0")}<span>/</span>{String(galleryData.length).padStart(2,"0")}</span>
        </div>
        <aside className="lightbox-details">
          <span className="lightbox-category">{selectedImage.category}</span>
          <h2>{selectedImage.title}</h2>
          <div className="lightbox-divider"></div>
          <div className="detail-row">
            <span>Created by</span>
            <strong>{selectedImage.creator}</strong>
          </div>
          <div className="detail-row">
            <span>Type</span>
            <strong>{selectedImage.description}</strong>
          </div>
          <div className="detail-row">
            <span>Collection</span>
            <strong>Lensora Archive</strong>
          </div>
          <div className="lightbox-navigation">
            <button type="button" onClick={showPreviousImage} aria-label="Previous image"><FiArrowLeft/><span>Previous</span></button>
            <button type="button" onClick={showNextImage} aria-label="Next image"><span>Next</span><FiArrowRight/></button>
          </div>
          <p className="keyboard-hint">Use ← → arrow keys to navigate</p>
        </aside>
      </div>
    </div>
  );
}
export default Lightbox;