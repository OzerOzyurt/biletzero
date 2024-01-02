import React, { forwardRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Section.css";
import Carousel from "react-bootstrap/Carousel";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";

function Section() {
  const [key, setKey] = useState("home");
  const [show, setshow] = useState(true);
  const [filt, setfilt] = useState(true);

  return (
    <>
      <div className="sectionbilet " id="git">
        <Container className="secdiv">
          <p className={filt ? "secspan" : "secspan2"}>
            {" "}
            <FaSlidersH
              size={"1rem"}
              style={{ transform: "rotate(90deg)", marginBottom: "5px" }}
            />{" "}
            Filtreler
          </p>
          <Row>
            <Col sm={7}>
              <div className="">
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 tabz border-0"
                  onClick={() => setfilt(!filt)}
                >
                  <Tab
                    className="tablist tabwhite"
                    eventKey="home"
                    title="Yaklaşan Etkinlik"
                    onSelect={() => setfilt(true)}
                  >
                    <div className="d-none d-lg-block">
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4b">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <p className="biletsat4-3b">
                            <span className="biletsat4-4b">TÜKENDİ</span>
                          </p>
                        </div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal">
                          <p className="biletsat4-ipt">İPTAL EDİLDİ</p>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    className="tablist tabwhite"
                    eventKey="profile"
                    title="Geçmiş Etkinlik"
                    onClick={() => setfilt(false)}
                  >
                    <div className="d-none d-lg-block">
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col sm={5}>
              <div className="rightside">
                <h4 className="sech4">Biz Kimiz?</h4>
                {show ? (
                  <p>
                    Perdenin Ardındakiler Doruk Ereşter ve Direnç Kaçmaz'ın
                    yollarının 2017'de kesişmesiyle ortaya çıkan bir müzik...
                  </p>
                ) : (
                  <p>
                    Perdenin Ardındakiler Doruk Ereşter ve Direnç Kaçmaz'ın
                    yollarının 2017'de kesişmesiyle ortaya çıkan bir müzik.
                    Alternatif pop dünyasının 2020 yılı içinde en çok konuşulan,
                    en çok dinlenen ekiplerinden biri oldu Perdenin
                    Ardındakiler. Doruk Ereşter ve Direnç Kaçmaz’dan oluşan
                    ekip, henüz ismini açıklamadıkları yeni albümleri öncesinde
                    “Bu Şehir Bugün Sensiz” adını verdikleri yeni bir single
                    yayınladılar. Perdenin Ardındakiler, yazdıkları şarkıların
                    mutsuzluğun değil, tecrübenin sonucu oduğunu düşünüyor.
                    Doruk Ereşter, “Tecrübe ettiğimiz kadarıyla var
                    olabiliyoruz. Bazen çok kötü tecrübeler, daha doğru adımlar
                    atmamız için bize yol gösterebiliyor” diyor. Ve ekliyor:
                    “Ancak insan olmak, insan olmaya çalışmak başlı başına bir
                    mesele. Kırdıkça, kırıldıkça insan olduğumu hissediyorum
                    ben. Bu açıdan hüzün benim için sevinçten çok daha güçlü bir
                    duygu…” Perdenin Ardındakiler’e merak ettiklerimizi sorduk.
                  </p>
                )}

                <span onClick={() => setshow(!show)}>
                  {show ? <p>Daha Fazla</p> : <p>Daha Az</p>}
                </span>
                <div className="icons">
                  <BsInstagram />
                  <FaFacebookF />
                  <CiFacebook />
                  <BsTwitterX />
                </div>
                <h4 className="sech4-2">Konserlerimizden Kesitler</h4>

                <div>
                  <Carousel data-bs-theme="white">
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g1.jpeg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g2.jpeg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g1.jpeg"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
          <div className="ifra">
          <iframe
            width="100%"
            height="566"
            src="https://www.youtube.com/embed/GWBJAk0GNic?si=r-yYi1o_as9CJw7U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
        </Container>
      </div>
      <div className="sectionbiletmobil" id="gitt">
        <Container className="secdiv">
          <p className={filt ? "secspanmobil" : "secspan2mobil"}>
            {" "}
            <FaSlidersH
              size={"1rem"}
              style={{ transform: "rotate(90deg)", marginBottom: "5px" }}
            />{" "}
            
          </p>
          <Row className="mb-5">
            <Col xl={7}>
              <div className="">
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3 tabzmobil border-0"
                  onClick={() => setfilt(!filt)}
                >
                  <Tab
                    className="tablist tabwhite"
                    eventKey="home"
                    title="Yaklaşan Etkinlik"
                    onSelect={() => setfilt(true)}
                  >
                    <div className=" ">
                      <div className="biletsat d-flex flex-column">
                        <div className="biletsat2 d-none"></div>
                        <div className="biletsat3mobil">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1mobil">
                              <div className="biletsataygünmobil">
                                <p className="biletsataymobil">EKİ</p>
                                <p className="biletsatgünmobil">06</p>
                              </div>
                              <div>
                                <p className="biletsatyermobil">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaatmobil">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftkmobil">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4 d-none ">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      {/* <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4b">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <p className="biletsat4-3b">
                            <span className="biletsat4-4b">TÜKENDİ</span>
                          </p>
                        </div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal">
                          <p className="biletsat4-ipt">İPTAL EDİLDİ</p>
                        </div>
                      </div>
                      <div className="biletsat">
                        <div className="biletsat2"></div>
                        <div className="biletsat3">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                            <span className="biletciftk">
                              Çift kişilik bilet avantajlarıyla
                            </span>
                          </div>
                        </div>
                        <div className="biletsat4">
                          <p className="biletsat4-1">₺500</p>
                          <p className="biletsat4-2">Başlayan fiyatlarla</p>
                          <button className="biletsat4-3">
                            <NavLink className="biletsat4-4" to={"/Yerizmirde"}>
                              Bilet Al
                            </NavLink>
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </Tab>
                  <Tab
                    className="tablist tabwhite"
                    eventKey="profile"
                    title="Geçmiş Etkinlik"
                    onClick={() => setfilt(false)}
                  >
                    <div className="d-none d-lg-block">
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                      <div className="biletsatiptal">
                        <div className="biletsat2-b"></div>
                        <div className="biletsat3-b">
                          <div className="d-flex flex-column">
                            <div className="biletsat-a1">
                              <div className="biletsataygün">
                                <p className="biletsatay">EKİ</p>
                                <p className="biletsatgün">06</p>
                              </div>
                              <div>
                                <p className="biletsatyer2">
                                  {" "}
                                  <IoLocationOutline /> Holly Stone, DENİZLİ
                                </p>
                                <p className="biletsatsaat2">
                                  <IoTimeOutline /> 21:45{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="biletsat4-iptal"></div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col xl={5}>
              <div className="rightsidemobil">
                <h4 className="sech4mobil">Biz Kimiz?</h4>
                {show ? (
                  <p>
                    Perdenin Ardındakiler Doruk Ereşter ve Direnç Kaçmaz'ın
                    yollarının 2017'de kesişmesiyle ortaya çıkan bir müzik...
                  </p>
                ) : (
                  <p>
                    Perdenin Ardındakiler Doruk Ereşter ve Direnç Kaçmaz'ın
                    yollarının 2017'de kesişmesiyle ortaya çıkan bir müzik.
                    Alternatif pop dünyasının 2020 yılı içinde en çok konuşulan,
                    en çok dinlenen ekiplerinden biri oldu Perdenin
                    Ardındakiler. Doruk Ereşter ve Direnç Kaçmaz’dan oluşan
                    ekip, henüz ismini açıklamadıkları yeni albümleri öncesinde
                    “Bu Şehir Bugün Sensiz” adını verdikleri yeni bir single
                    yayınladılar. Perdenin Ardındakiler, yazdıkları şarkıların
                    mutsuzluğun değil, tecrübenin sonucu oduğunu düşünüyor.
                    Doruk Ereşter, “Tecrübe ettiğimiz kadarıyla var
                    olabiliyoruz. Bazen çok kötü tecrübeler, daha doğru adımlar
                    atmamız için bize yol gösterebiliyor” diyor. Ve ekliyor:
                    “Ancak insan olmak, insan olmaya çalışmak başlı başına bir
                    mesele. Kırdıkça, kırıldıkça insan olduğumu hissediyorum
                    ben. Bu açıdan hüzün benim için sevinçten çok daha güçlü bir
                    duygu…” Perdenin Ardındakiler’e merak ettiklerimizi sorduk.
                  </p>
                )}

                <span onClick={() => setshow(!show)}>
                  {show ? <p>Daha Fazla</p> : <p>Daha Az</p>}
                </span>
                <div className="icons">
                  <BsInstagram />
                  <FaFacebookF />
                  <CiFacebook />
                  <BsTwitterX />
                </div>
                <h4 className="sech4-2mobil">Konserlerimizden Kesitler</h4>

                <div>
                  <Carousel data-bs-theme="white">
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g1.jpeg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>First slide label</h5>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g2.jpeg"
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 carimg"
                        src="https://test.biletzero.com/images/static/g1.jpeg"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
          <div className="iframobil">
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/GWBJAk0GNic?si=r-yYi1o_as9CJw7U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}

export default forwardRef(Section);
