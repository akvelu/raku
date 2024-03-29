import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./Style.css";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              SHOPEEEEE
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">
                    New Arrivals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contactus">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="icons">
            <SearchOutlined className="icon" />
            <UserOutlined className="icon" />
            <ShoppingCartOutlined className="icon" />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
