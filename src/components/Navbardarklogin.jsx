import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Navbardark.css";
import { NavLink } from "react-bootstrap";
import { MainContext } from "../MainContext";

function Navbardarklogin() {
  const  { user, setUser } =useContext(MainContext)
  console.log(user)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  },[]);
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
          <div>
          {
            user ? <span style={{ color: "white" }}> Hoşgeldin {user.name} </span> : null
          }
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbardarklogin;
