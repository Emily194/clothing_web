import React from "react";
import "./Cart.css"; // Import CSS for styling

const Cart = ({ cart, clearCart, userEmail }) => {
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0); // Calculate total price safely

  const handleCheckout = async () => {
    if (userEmail === "") {
      alert(`Please log in to purchase products.`);
      return;
    }

    try {
      alert(`Thank you for your purchase of $${totalPrice.toFixed(2)}!`);

      // Send email after checkout
      const response = await fetch("http://localhost:8000/send-email.php", {
        // Make sure the path is correct
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, totalPrice }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Handle successful email send
        clearCart(); // Clear the cart after checkout
      } else {
        throw new Error(data.message); // Throw an error to be caught below
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an issue sending the confirmation email.");
    }
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
