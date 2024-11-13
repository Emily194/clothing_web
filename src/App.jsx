import React, { useState } from "react";
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
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
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loggedInEmail, setLoggedInEmail] = useState("");

  const handleLogin = (email) => {
    setLoggedInEmail(email);
    navigate("/home");
    console.log(email);
  };

  const handleLogout = () => {
    setLoggedInEmail("");
    navigate("/home");
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
      <Header
        cartCount={cart.length}
        loggedInEmail={loggedInEmail}
        handleLogout={handleLogout}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                clearCart={clearCart}
                userEmail={loggedInEmail}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/men" element={<MenPage addToCart={addToCart} />} />
          <Route path="/women" element={<WomenPage addToCart={addToCart} />} />
          <Route path="/shoes" element={<ShoesPage addToCart={addToCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
