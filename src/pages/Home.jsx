import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  // State for cart count
  const [cartCount, setCartCount] = useState(0);

  // State for slides
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Images for slides
  const images = [
    { src: "/slide1.png", link: "/shop-now" },
    { src: "/slide2.png", link: "/shop-now" },
  ];

  // Slide interval effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Function to handle adding to cart
  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div>
      {/* Hero Banner */}
      <div>
        <div className="slides">
        <div className="slide">

          <img
            src={images[currentSlideIndex].src}
            alt={`Slide ${currentSlideIndex + 1}`}
          />
          <a href={images[currentSlideIndex].link} className="shop-now-btn">
            Shop Now
          </a>
        </div>
        </div>
        <button
          className="prev-arrow"
          onClick={() =>
            setCurrentSlideIndex(
              (currentSlideIndex - 1 + images.length) % images.length
            )
          }
        >
          &#10094;
        </button>
        <button
          className="next-arrow"
          onClick={() =>
            setCurrentSlideIndex((currentSlideIndex + 1) % images.length)
          }
        >
          &#10095;
        </button>
      </div>

      {/* Featured Collections */}
      <div className="collections">
        <h2>Featured Collections</h2>
        <div className="collection-grid">
          <div className="collection-item">
            <img src="/women-collection.jpg" alt="Women's Collection" />
            <a href="#women">Shop Women's Collection</a>
          </div>
          <div className="collection-item">
            <img src="/men-collection.jpg" alt="Men's Collection" />
            <a href="#men">Shop Men's Collection</a>
          </div>
          <div className="collection-item">
            <img src="/shoes-collection.jpg" alt="Shoes Collection" />
            <a href="#shoes">Shop Shoes Collection</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
