import React, { useState, useEffect } from "react";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "pro1", price: 25, quantity: 1, imgSrc: "" },
    { id: 2, name: "pro2", price: 25, quantity: 1, imgSrc: "" },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotals = () => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const newTax = newSubtotal * 0.09; // Assuming 9% tax rate
    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newSubtotal + newTax);
  };

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.imgSrc} alt={item.name} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="quantity">
            <label htmlFor={`qty-${item.id}`}>Qty:</label>
            <input
              type="number"
              id={`qty-${item.id}`}
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </div>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <div>
          <span>Subtotal:</span>
          <span id="subtotal">${subtotal.toFixed(2)}</span>
        </div>
        <div>
          <span>Tax (9%):</span>
          <span id="tax">${tax.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span id="total">${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
