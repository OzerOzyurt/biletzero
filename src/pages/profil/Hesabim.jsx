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
              class="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
            >
              <div class="accordion-item accorit">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button accorbtn"
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
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
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
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
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
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        ...
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex="0"
                      >
                        ...
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex="0"
                      >
                        ...
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-disabled"
                        role="tabpanel"
                        aria-labelledby="pills-disabled-tab"
                        tabindex="0"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item accorit">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button accorbtn collapsed"
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
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item accorit">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button accorbtn collapsed"
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
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
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
