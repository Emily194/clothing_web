import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />

        {/* 
          Uncomment these unimplemented pages once implemented. 

        <Route path="login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} /> 
        
        */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
