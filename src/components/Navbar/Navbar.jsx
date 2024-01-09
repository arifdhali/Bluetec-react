import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo, NavItems, NavDropdown } from "../Navbar";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="container">
          <div className="row justify-between">
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
            <div className="col-md-2 text-end">
              <Link to="/price" className="btn btn-primary">                
                  <i class="fa-solid fa-arrow-right"></i>
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
