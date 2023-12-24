import React from "react";
import Container from "react-bootstrap/Container";
import "./Navbardark.css";
import { NavLink } from "react-bootstrap";

function Navbardark() {
  return (
    <div className="headertop2">
      <nav className="navbar">
        <Container className="h-auto">
          <NavLink href="/" className="navbar-brand">
            <img
              src="https://cdn.biletzero.com/images/57303453_409556369841369_3735883590534168576_n-removebg-preview_50-2_50.png"
              alt="logo"
              className=""
            />
          </NavLink>
        </Container>
      </nav>
    </div>
  );
}

export default Navbardark;
