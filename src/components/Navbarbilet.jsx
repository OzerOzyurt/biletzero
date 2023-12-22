import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { NavLink } from "react-bootstrap";

function Navbarbilet() {
  return (
    <div className="headertop">
      <nav className="navbar">
        <Container className="h-auto">
          <NavLink href="/" className="navbar-brand">
            <img
              src="https://cdn.biletzero.com/images/57303453_409556369841369_3735883590534168576_n-removebg-preview_50-2_50.png"
              alt="logo"
              className=""
            />
          </NavLink>
          <div className="canvas-auth">
            <NavLink className="login" href="/members">
              Giriş Yap
              {/* <i className="tz-down-right-arrow-purple"></i> */}
            </NavLink>
            <div className="desktop-split"></div>
            <a
              className="login"
              href="/singup"
            >
              Üye Ol
              {/* <i className="tz-down-right-arrow-purple"></i> */}
            </a>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbarbilet;
