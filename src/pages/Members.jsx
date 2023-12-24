import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { NavLink } from "react-bootstrap";
import "./Members.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../MainContext";


function Members() {
  const {  setUser} = useContext(MainContext) 
  const navigate = useNavigate()
  const handleLogin = () => {
    const user = {id: 1, name:"testuye"}
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate("/")
   }
  return (
    <div className="membersbilet">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="yertutucu">
              <NavLink href="/" className="navbar-brand">
                <img
                  src="https://cdn.biletzero.com/images/57303453_409556369841369_3735883590534168576_n-removebg-preview_50-2_50.png"
                  alt="logo"
                  className=""
                />
              </NavLink>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <div className="members1">
                <NavLink className="memberslogin" href="/members">Giriş yap</NavLink>
                <NavLink className="memberslogin" href="/singup">Üye ol</NavLink>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Adresinizi Yazin"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Şifreniz" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleLogin} variant="primary" type="submit">
                  Giris Yap
                </Button>
              </Form>
            </div>
            <div className="members2">
              <span>
                <FcGoogle />
              </span>{" "}
              <NavLink href="https://test.biletzero.com/Account/GoogleLogin">
                {" "}
                Google ile Bağlanmak icin Tiklayin
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Members;
