import React, { useState } from "react";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3}){0,2}$/;
  const namePattern = /^[a-zA-Z0-9._-]+$/;
  const passwordPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  const phonePattern = /^\d{8}$/;

  const validateForm = () => {
    let isValid = true;
    let err = {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };

    if (!namePattern.test(formData.username)) {
      err.username = "Allow only letters, numbers, -, _ and .";
      isValid = false;
    }

    if (!emailPattern.test(formData.email)) {
      err.email = "Invalid email format";
      isValid = false;
    }

    if (!phonePattern.test(formData.phoneNumber)) {
      err.phoneNumber = "Phone number must be 8 digits.";
      isValid = false;
    }

    if (!passwordPattern.test(formData.password)) {
      err.password =
        "Password must be at least 8 characters and contain at least one special character.";
      isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(err);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      alert("Please correct the errors before submitting the form");
      return;
    }

    const {confirmPassword, ...data} = formData;
    console.log(data);

    try {
      const response = await fetch("http://localhost:8000/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Signup failed!");
        return;
      }

      alert("User signed up successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>We can't wait to have you join us &#128420;</h2>
      <form id="sign-up" onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && (
          <span className="error-message">{errors.username}</span>
        )}

        <input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          required
        />
        {errors.phoneNumber && (
          <span className="error-message">{errors.phoneNumber}</span>
        )}

        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}

        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}

        <input id="sign-up" type="submit" value="Submit" />
        <Link to="/forget-password">Forget Password?</Link>
      </form>
    </div>
  );
}
