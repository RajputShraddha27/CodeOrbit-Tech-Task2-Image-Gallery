import {FiArrowUpRight} from "react-icons/fi";
import "./ImageCard.css";
function ImageCard({item,index,onOpen}){
  return(
    <article className={`image-card ${item.size}`} data-image-id={item.id}>
      <button type="button" className="image-card-button" onClick={()=>onOpen(item)} aria-label={`Open ${item.title}`}>
        <div className="image-wrapper">
          <img src={item.image} alt={item.title} loading="lazy"/>
          <div className="image-overlay">
            <span className="open-image-icon"><FiArrowUpRight/></span>
            <div className="overlay-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
      </button>
      <div className="image-information">
        <div>
          <span className="image-number">{String(index+1).padStart(2,"0")}</span>
          <h3>{item.title}</h3>
        </div>
        <div className="image-meta">
          <span>{item.creator}</span>
          <span>{item.description}</span>
        </div>
      </div>
    </article>
  );
}
export default ImageCard;