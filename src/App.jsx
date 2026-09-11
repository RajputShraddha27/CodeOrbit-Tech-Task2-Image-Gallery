import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchFilter from "./components/SearchFilter";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import FeaturedStory from "./components/FeaturedStory";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main>
        <Hero />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <Gallery
          searchTerm={searchTerm}
          activeCategory={activeCategory}
          onOpen={setSelectedImage}
        />
        <FeaturedStory />

        <About />
      </main>

      <Footer />

      <Lightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}

export default App;