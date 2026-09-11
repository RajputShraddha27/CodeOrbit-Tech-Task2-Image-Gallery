import {useState} from "react";
import {FiAperture,FiMenu,FiSearch,FiX} from "react-icons/fi";
import "./Navbar.css";
function Navbar({searchTerm,setSearchTerm}){
  const [menuOpen,setMenuOpen]=useState(false);
  const [searchOpen,setSearchOpen]=useState(false);
  const closeMenu=()=>{
    setMenuOpen(false);
  };
  const handleSearchSubmit=(event)=>{
    event.preventDefault();
    document.getElementById("collections")?.scrollIntoView({behavior:"smooth"});
  };
  const clearSearch=()=>{
    setSearchTerm("");
  };
  return(
    <header className="navbar-header">
      <nav className="lensora-navbar container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon"><FiAperture/></span>
          <span className="logo-text">Lensora<small>Visual Stories</small></span>
        </a>
        {/* Navigation */}
        <div className={`navbar-links ${menuOpen?"menu-open":""}`}>
          <a href="#discover" onClick={closeMenu}>Discover</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#stories" onClick={closeMenu}>Stories</a>
          <a href="#about" onClick={closeMenu}>About</a>
        </div>
        {/* Actions */}
        <div className="navbar-actions">
          <button type="button" className="search-toggle" onClick={()=>setSearchOpen(!searchOpen)} aria-label={searchOpen?"Close search":"Open search"}>
            {searchOpen?<FiX/>:<FiSearch/>}
          </button>
          <a href="#collections" className="explore-link">Explore<span>↗</span></a>
          <button type="button" className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
            {menuOpen?<FiX/>:<FiMenu/>}
          </button>
        </div>
      </nav>
      {/* Expandable Search */}
      <div className={`navbar-search ${searchOpen?"search-open":""}`}>
        <form className="container search-inner" onSubmit={handleSearchSubmit}>
          <FiSearch/>
          <input type="search" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} placeholder="Search visual stories..." aria-label="Search visual stories"/>
          {searchTerm&&<button type="button" className="clear-navbar-search" onClick={clearSearch}>Clear</button>}
          <button type="submit" className="submit-navbar-search">Search</button>
        </form>
      </div>
    </header>
  );
}
export default Navbar;