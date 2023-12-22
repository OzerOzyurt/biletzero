import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { NavLink } from "react-bootstrap";
import "./Members.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Singup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
                <NavLink href="/members">Giriş yap</NavLink>
                <NavLink href="/singup">Üye ol</NavLink>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Adınız"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Soyadınız"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Control type="text" placeholder="Şehir" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Control type="text" placeholder="İlçe" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Control
                      type="text"
                      placeholder="Posta Kodu"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Singup;
