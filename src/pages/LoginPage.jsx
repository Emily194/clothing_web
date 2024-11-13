import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import "./LoginPage.css";

const LoginPage = ({ handleLogin }) => {
  const { login } = useAuth(); // Get the login function from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error state before making a new request
    setError("");

    if (username === "" || password === "") {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      const { email } = data; // Destructure email from the response
      login({ email }); // Call the login function with email

      if (email === "") {
        alert("Invalid username and password.");
        return;
      }

      if (response.ok) {
        const { email } = data; // Destructure email from the response
        login({ email }); // Call the login function with email
        alert(data.message);
        handleLogin(email); // Call the handleLogin function passed as a prop
        navigate("/home"); // Redirect to home page
      } else {
        setError(data.message); // Show the error message from the server
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again."); // Set a user-friendly error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required // Ensure this field is required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required // Ensure this field is required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;