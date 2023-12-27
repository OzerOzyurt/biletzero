import React, { forwardRef, useContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
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
import { MainContext } from "../MainContext";


function Section() {
  const [key, setKey] = useState("home");
  const [show, setshow] = useState(true);
  const {secgit} = useContext(MainContext)
  return (
    <div className="sectionbilet " id="git" secgit={secgit} >      
      <Container>
        <Row>
          <Col sm={7}>
            <div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 tabz border-0"
              >
                <Tab
                  className="tablist tabwhite"
                  eventKey="home"
                  title="Yaklaşan Etkinlik"
                >
                  <div className="biletsat"><NavLink to={"/Yerizmirde"}>Bilet Satin Al</NavLink></div>
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
                  en çok dinlenen ekiplerinden biri oldu Perdenin Ardındakiler.
                  Doruk Ereşter ve Direnç Kaçmaz’dan oluşan ekip, henüz ismini
                  açıklamadıkları yeni albümleri öncesinde “Bu Şehir Bugün
                  Sensiz” adını verdikleri yeni bir single yayınladılar.
                  Perdenin Ardındakiler, yazdıkları şarkıların mutsuzluğun
                  değil, tecrübenin sonucu oduğunu düşünüyor. Doruk Ereşter,
                  “Tecrübe ettiğimiz kadarıyla var olabiliyoruz. Bazen çok kötü
                  tecrübeler, daha doğru adımlar atmamız için bize yol
                  gösterebiliyor” diyor. Ve ekliyor: “Ancak insan olmak, insan
                  olmaya çalışmak başlı başına bir mesele. Kırdıkça, kırıldıkça
                  insan olduğumu hissediyorum ben. Bu açıdan hüzün benim için
                  sevinçten çok daha güçlü bir duygu…” Perdenin Ardındakiler’e
                  merak ettiklerimizi sorduk.
                </p>
              )}

              <span onClick={() => setshow(!show)}>
                {show ? <p>Daha Fazla</p> : <p>Daha Az</p>}
              </span>
              <div className="icons">
                <BsInstagram />
                <FaFacebookF/>
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GWBJAk0GNic?si=r-yYi1o_as9CJw7U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>
    </div>
  );
}

export default forwardRef(Section);
