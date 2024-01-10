// App.jsx
import React, { useEffect } from "react";
import "./App.css";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// all nav items
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// all pages
import {
  Home,
  Company,
  OurTeam,
  Career,
  About,
  Services,
  Contact,
  Error,
} from "../src/pages";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar />
        <main id="main">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
      </Routes>
        </main>
      <Footer />
    </Router>
  );
}
