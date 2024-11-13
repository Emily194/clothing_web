import React from "react";
import "./ShoesPage.css"; 

const ShoesPage = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Shoe 1",
      image: "/shoes.png", // Ensure these images exist in your public folder
      price: 29.99, // Price for Shoe 1
    },
    {
      id: 2,
      name: "Shoe 2",
      image: "/shoes2.png",
      price: 39.99, // Price for Shoe 2
    },
    {
      id: 3,
      name: "Shoe 3",
      image: "/shoes3.png",
      price: 49.99, // Price for Shoe 3
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Shoes Section</h2>
      <p>Welcome to the Shoe's section!</p>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleAddToCart(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p> {/* Display the price */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
