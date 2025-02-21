import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupForm from "./pages/SignupForm";
import SignInForm from "./pages/SignInForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
