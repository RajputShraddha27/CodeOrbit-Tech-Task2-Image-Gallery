import {FiAperture,FiArrowUp,FiGithub,FiLinkedin,FiMail} from "react-icons/fi";
import "./Footer.css";
function Footer(){
  const currentYear=new Date().getFullYear();
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };
  return(
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon"><FiAperture/></span>
              <div className="footer-logo-text">
                Lensora
                <small>Visual Stories</small>
              </div>
            </a>
            <p>A curated digital archive exploring visual stories through nature, architecture, portraits and abstract art.</p>
          </div>
          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-title">Explore</span>
            <a href="#discover">Discover</a>
            <a href="#collections">Collections</a>
            <a href="#stories">Stories</a>
            <a href="#about">About</a>
          </div>
          {/* Categories */}
          <div className="footer-column">
            <span className="footer-title">Collections</span>
            <a href="#categories">Nature</a>
            <a href="#categories">Architecture</a>
            <a href="#categories">Portraits</a>
            <a href="#categories">Abstract</a>
          </div>
          {/* Developer */}
          <div className="footer-developer">
            <span className="footer-title">Created By</span>
            <h3>Rajput Shraddha</h3>
            <p>Frontend Developer & React.js Developer</p>
            <div className="footer-socials">
              <span className="footer-social-icon" title="GitHub" aria-label="GitHub"><FiGithub/></span>
              <span className="footer-social-icon" title="LinkedIn" aria-label="LinkedIn"><FiLinkedin/></span>
              <span className="footer-social-icon" title="Email" aria-label="Email"><FiMail/></span>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Lensora. Designed and developed by <strong>Rajput Shraddha</strong>.</p>
          <p className="footer-note">Images are AI-generated for this frontend project.</p>
          <button type="button" className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top"><FiArrowUp/></button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;