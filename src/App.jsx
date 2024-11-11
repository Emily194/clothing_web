import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MenPage from "./pages/MenPage";
import ShoesPage from "./pages/ShoesPage";
import SignUpPage from "./pages/SignupPage";
import WomenPage from "./pages/WomenPage";

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSignup = (details) => {
    setUserDetails(details);
    setUsers((prevUsers) => [...prevUsers, details]);
    console.log("User Details:", details);
  };

  const validateUser = (username, password) => {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const clearCart = () => {
    setCart([]); // Clear the cart
  };

  return (
    <div className="app-container">
      <Header cartCount={cart.length} /> {/* Pass cart count to Header */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/signup"
            element={<SignUpPage onSignup={handleSignup} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} clearCart={clearCart} />}
          />{" "}
          {/* Pass clearCart to Cart */}
          <Route
            path="/login"
            element={<LoginPage validateUser={validateUser} />}
          />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage addToCart={addToCart} />} />
          <Route path="/shoes" element={<ShoesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
