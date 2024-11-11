import React from "react";
import "./Cart.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0); // Calculate total price safely

  const handleCheckout = () => {
    alert(`Thank you for your purchase of $${totalPrice.toFixed(2)}!`);
    clearCart(); // Clear the cart after checkout
    navigate("/home");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
