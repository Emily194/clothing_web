import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3}){0,2}$/;
  const namePattern = /^[a-zA-Z0-9._-]+$/;
  const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  const phonePattern = /^\d{8}$/;

  const validateField = (name, value) => {
    let error = "";
    if (name === "username" && !namePattern.test(value)) {
      error = "Allow only letters, numbers, -, _ and .";
    } else if (name === "email" && !emailPattern.test(value)) {
      error = "Invalid email format";
    } else if (name === "phoneNumber" && !phonePattern.test(value)) {
      error = "Invalid phone number (no space allowed)";
    } else if (name === "password" && !passwordPattern.test(value)) {
      error = "Password must be at least 8 characters and contain at least one special character.";
    } else if (name === "confirmPassword" && value !== formData.password) {
      error = "Password does not match";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    return error === "";
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Object.keys(formData).every((field) =>
      validateField(field, formData[field])
    );

    if (!isValid) {
      alert("Please correct the errors before submitting the form");
      return;
    }

    try {
      const response = await fetch("Signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert("An error occurred during registration.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="login-container">
      <h2>We can't wait to have you join us &#128420;</h2>
      <form id="sign-up" onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.username && <span className="error-message">{errors.username}</span>}

        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <input
          id="phone"
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}

        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && <span className="error-message">{errors.password}</span>}

        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

        <input id="sign-up" type="submit" value="Submit" />
        <Link to="/forget-password">Forget Password?</Link>
      </form>
    </div>
  );
}
