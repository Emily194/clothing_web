import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const images = ["/slide1.png"];

const sectionImages = {
  men: "/men.png",
  women: "/women.png",
  shoes: "/shoes.png",
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="homepage">
      <div className="banner">
        <img
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="banner-image"
        />
        <div className="nav-buttons">
          <button onClick={goToPreviousImage} className="nav-button left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNextImage} className="nav-button right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="sections">
        <div className="section">
          <img src={sectionImages.men} alt="Men" className="section-image" />
          <Link to="/men" className="section-link">
            Men
          </Link>
        </div>
        <div className="section">
          <img
            src={sectionImages.women}
            alt="Women"
            className="section-image"
          />
          <Link to="/women" className="section-link">
            Women
          </Link>
        </div>
        <div className="section">
          <img
            src={sectionImages.shoes}
            alt="Shoes"
            className="section-image"
          />
          <Link to="/shoes" className="section-link">
            Shoes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
