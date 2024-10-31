import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen w-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
