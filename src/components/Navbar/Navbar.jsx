import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo, NavItems, NavDropdown } from "../Navbar";
import "./Navbar.css";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let isScrolling = (e) => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", isScrolling);
    return () => {
      window.removeEventListener("scroll", isScrolling);
    };
  }, []);

  return (
    <>
      <header className={`${sticky ? "sticky" : ""}`}>
        <nav className="container">
          <div className="row justify-between align-items-center">
            <div className="col-md-4">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
            <div className="col-md-6">
              <ul className="menu">
                {NavItems.map((item, index) => (
                  <li
                    key={index}
                    className={`menu-item ${item.submenu ? "dropdown" : ""}`}
                  >
                    <NavLink className="menu-link" to={item.url}>
                      {item.title}
                    </NavLink>
                    {item.submenu && (
                      <NavDropdown key={index} submenu={item.submenu} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 d-flex justify-content-end">
              <Link to="/price" className="btn btn-primary">
                <i className="fa-solid fa-arrow-right"></i>
                Buy now
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
