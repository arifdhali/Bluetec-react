// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
// router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

// all pages
import {
  Home,
  Company,
  OurTeam,
  Career,
  About,
  Services,
  Contact,
  Price,
  Error,
  Navbar,
  Footer,
} from "../src/pages";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
function ScrollToTop() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(location.pathname, { replace: true });
    window.scrollTo(0, 0);
  }, [location.pathname, navigate]);

  return null; 
}

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <main id="main">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
