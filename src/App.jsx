import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupForm from "./pages/SignupForm";
import SignInForm from "./pages/SignInForm";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import CategoryPage from "./pages/CategoryPage";
const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="category/:category" element={<CategoryPage />} />
          </Route>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
