import {FiSearch,FiX} from "react-icons/fi";
import "./SearchFilter.css";
const categories=["All","Nature","Architecture","Portraits","Abstract"];
function SearchFilter({searchTerm,setSearchTerm,activeCategory,setActiveCategory}){
  return(
    <section className="discover-section" id="discover">
      <div className="container">
        <div className="discover-heading">
          <div>
            <span className="section-number">01 — Discover</span>
            <h2>Explore the<em> visual archive.</em></h2>
          </div>
          <p>Browse a curated selection of visual stories across different styles, subjects and perspectives.</p>
        </div>
        <div className="discovery-controls">
          {/* Search */}
          <div className="gallery-search">
            <FiSearch/>
            <input type="search" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} placeholder="Search visual stories..." aria-label="Search visual stories"/>
            {searchTerm&&<button type="button" onClick={()=>setSearchTerm("")} aria-label="Clear search"><FiX/></button>}
          </div>
          {/* Categories */}
          <div className="category-tabs" id="categories">
            {categories.map((category)=>(
              <button type="button" key={category} className={activeCategory===category?"active-category":""} onClick={()=>setActiveCategory(category)}>{category}</button>
            ))}
          </div>
        </div>
        <div className="filter-status">
          <span>Showing: <strong>{activeCategory}</strong></span>
          {searchTerm&&<span>Search: <strong>“{searchTerm}”</strong></span>}
        </div>
      </div>
    </section>
  );
}
export default SearchFilter;