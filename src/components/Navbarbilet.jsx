import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MainContext } from "../MainContext";
import Dropdown from "react-bootstrap/Dropdown";

function Navbarbilet() {
  const { user, handleLogout } = useContext(MainContext);
  console.log(user);
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

          {user ? (
            <Dropdown > 
              <Dropdown.Toggle  variant="" id="dropdown-basic">
               <span style={{color:"white"}} > Hoşgeldin {user.name} </span> 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Siparişlerim</Dropdown.Item>
                <Dropdown.Item href="/">Hesabım</Dropdown.Item>
                <Dropdown.Item href="/">Ayarlarım</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Çıkış Yap</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="canvas-auth">
              <NavLink className="login" to="/members">
                Giriş Yap
              </NavLink>
              <div className="desktop-split"></div>
              <a className="login" to="/singup">
                Üye Ol
              </a>
            </div>
          )}
        </Container>
      </nav>
    </div>
  );
}

export default Navbarbilet;
