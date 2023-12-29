import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MainContext } from "../MainContext";
import Dropdown from "react-bootstrap/Dropdown";

function Navbarbilet() {
  const { user, handleLogout } = useContext(MainContext);
  console.log(user);

  return (
    <>
      <div className="headertop">
        <nav className="navbar">
          <Container className="h-auto">
            <NavLink to="/" className="navbar-brand">
              <img
                src="https://cdn.biletzero.com/images/57303453_409556369841369_3735883590534168576_n-removebg-preview_50-2_50.png"
                alt="logo"
                className=""
              />
            </NavLink>

            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <span style={{ color: "white" }}>
                    {" "}
                    Hoşgeldin {user.name}{" "}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Siparislerim">
                    Siparişlerim
                  </Dropdown.Item>
                  <Dropdown.Item href="/Hesabim">Hesabım</Dropdown.Item>
                  <Dropdown.Item href="/Ayarlarim">Ayarlarım</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    Çıkış Yap
                  </Dropdown.Item>
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
      <div className="headermobiltop">
        <div className="mobil-container">
          <div className="navbar">
            <NavLink to="/" className="navbar-brand">
              <img
                src="https://cdn.biletzero.com/images/57303453_409556369841369_3735883590534168576_n-removebg-preview_50-2_50.png"
                alt="logo"
                className=""
              />
            </NavLink>

            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <span style={{ color: "white" }}>
                    {" "}
                    Hoşgeldin {user.name}{" "}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Siparislerim">
                    Siparişlerim
                  </Dropdown.Item>
                  <Dropdown.Item href="/Hesabim">Hesabım</Dropdown.Item>
                  <Dropdown.Item href="/Ayarlarim">Ayarlarım</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    Çıkış Yap
                  </Dropdown.Item>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbarbilet;
