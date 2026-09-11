import {FiArrowUpRight} from "react-icons/fi";
import "./FeaturedStory.css";
function FeaturedStory(){
  return(
    <section className="story-section" id="stories">
      <div className="container">
        <div className="story-heading">
          <span>02 — Featured Story</span>
          <span>Nature / Visual Journal</span>
        </div>
        <div className="story-layout">
          {/* Image */}
          <div className="story-image-wrapper">
            <img src="/images/gallery/nature-2.png" alt="Rain-covered flowers beside still water" loading="lazy"/>
            <span className="story-image-label">Morning Stillness</span>
          </div>
          {/* Content */}
          <div className="story-content">
            <span className="story-date">Visual Journal — 2026</span>
            <h2>Beauty often lives in the<em> quietest moments.</em></h2>
            <p>Morning Stillness explores the calm that appears when rain, light and nature meet. Every detail becomes part of a larger visual story—from water resting on a flower to the soft movement of mist.</p>
            <blockquote>“Photography is not only about what we see. It is also about what a moment makes us feel.”</blockquote>
            <a href="#collections" className="story-link">Return to the archive<FiArrowUpRight/></a>
          </div>
        </div>
        <div className="story-footer">
          <span>Lensora Visual Archive</span>
          <span>Story No. 01</span>
        </div>
      </div>
    </section>
  );
}
export default FeaturedStory;