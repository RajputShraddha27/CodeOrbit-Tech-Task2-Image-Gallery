import {FiArrowDownRight,FiArrowUpRight} from "react-icons/fi";
import "./Hero.css";
function Hero(){
  return(
    <section className="hero-section" id="home">
      <div className="hero-background-text">LENSORA</div>
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-label">
            <span></span>
            Curated Visual Archive
          </div>
          <h1 className="hero-title">
            Stories captured
            <span> beyond words.</span>
          </h1>
          <p className="hero-description">A thoughtfully curated collection of places, people and quiet moments—created to inspire the way you see the world.</p>
          <div className="hero-actions">
            <a href="#discover" className="hero-primary-button">
              Explore the archive
              <FiArrowUpRight/>
            </a>
            <a href="#collections" className="hero-text-link">View collections</a>
          </div>
          <a href="#discover" className="hero-footer-info">
            <span>Scroll to discover</span>
            <FiArrowDownRight/>
          </a>
        </div>
        {/* Right Image Composition */}
        <div className="hero-visual">
          <div className="main-image-wrapper">
            <img src="/images/hero-main.png" alt="White horse in a misty forest" className="hero-main-image"/>
          </div>
          <div className="small-image small-image-one">
            <img src="/images/hero-small-1.png" alt="Modern architecture"/>
            <span>Architecture</span>
          </div>
          <div className="small-image small-image-two">
            <img src="/images/hero-small-2.png" alt="Editorial portrait"/>
            <span>Portraits</span>
          </div>
          <a href="#discover" className="visual-circle" aria-label="Explore visual archive">
            <span>Explore</span>
            <FiArrowUpRight/>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;