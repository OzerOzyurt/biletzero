import React from "react";
import Navbardarklogin from "../../components/Navbardarklogin";
import Footer from "../../components/Footer";
import Sidebarprofil from "./Sidebarprofil";
import "./Hesabim.css";
// import { NavLink } from "react-bootstrap";

function Hesabim() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbardarklogin />
      <div
        style={{ backgroundColor: "#1e1e1e", minHeight: "60vh" }}
        className="siparis1"
      >
        <div className="container d-flex">
          <div className="col-sm-3">
            <Sidebarprofil />
          </div>
          {/* <Accordion defaultActiveKey="0" flush alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accor">Accordion Item #1</Accordion.Header>
              <Accordion.Body>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab
                  className="tablist tabwhite"
                  eventKey="home"
                  title="Yaklaşan Etkinlik"
                >
                  <div className="biletsat">1</div>
                  <div className="biletsat">2</div>
                  <div className="biletsat">3</div>
                  <div className="biletsat">4</div>
                </Tab>
                <Tab
                  className="tablist tabwhite"
                  eventKey="profile"
                  title="Geçmiş Etkinlik"
                >
                  <div className="biletsat">5</div>
                  <div className="biletsat">6</div>
                  <div className="biletsat">7</div>
                  <div className="biletsat">8</div>
                  <div className="biletsat">9</div>
                </Tab>
              </Tabs>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accor">Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accor">Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          <div className="accor1">
            <div
              className="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item accorit">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accorbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Kullanıcı Bilgilerim
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Hesap Bilgilerim
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Şifrem
                        </button>
                      </li>
                      
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex="0"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex="0"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-disabled"
                        role="tabpanel"
                        aria-labelledby="pills-disabled-tab"
                        tabIndex="0"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item accorit">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accorbtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Fatura Adreslerim
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>Yakında</strong>{" "}
                    
                  </div>
                </div>
              </div>
              <div className="accordion-item accorit">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button accorbtn collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Kayıtlı Kartlarım
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>Yakında</strong> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hesabim;
