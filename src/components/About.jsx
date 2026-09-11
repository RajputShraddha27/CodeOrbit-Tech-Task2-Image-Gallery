import {FiAperture,FiArrowUpRight,FiGrid,FiImage} from "react-icons/fi";
import "./About.css";
function About(){
  return(
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-top">
          <span>03 — About Lensora</span>
          <p>A frontend exploration of visual storytelling, thoughtful composition and interactive gallery experiences.</p>
        </div>
        <div className="about-layout">
          {/* Left Content */}
          <div className="about-content">
            <h2>More than an<em> image gallery.</em></h2>
            <p className="about-description">Lensora is a curated visual archive created to present photography and digital artwork through a minimal, editorial interface. It combines clean design with search, category filtering and immersive image viewing.</p>
            <p className="about-description">Every visual in this collection is AI-generated and presented as part of an experimental frontend design project.</p>
            <a href="#collections" className="about-link">Explore all visuals<FiArrowUpRight/></a>
          </div>
          {/* Right Visual */}
          <div className="about-visual">
            <div className="about-image">
              <img src="/images/gallery/abstract-1.png" alt="Purple fabric moving through the air" loading="lazy"/>
            </div>
            <div className="about-note">
              <FiAperture/>
              <p>Designed for people who find meaning in colour, form, light and quiet visual moments.</p>
            </div>
          </div>
        </div>
        {/* Project Statistics */}
        <div className="about-statistics">
          <div className="stat-item">
            <span className="stat-icon"><FiImage/></span>
            <div>
              <strong>12</strong>
              <span>Curated Visuals</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><FiGrid/></span>
            <div>
              <strong>04</strong>
              <span>Collections</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><FiAperture/></span>
            <div>
              <strong>01</strong>
              <span>Visual Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;