import React from "react";
import Navbardarklogin from "../../components/Navbardarklogin";
import Footer from "../../components/Footer";
import Sidebarprofil from "./Sidebarprofil";
import "./Siparisler.css";

function Siparisler() {
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
          <div className="siparis3">
            <h2 className="sipa1">Siparişlerim</h2>
            <div className="sip1 ">
              <p className="sip2">Henüz bilet yada ürün siparişi vermedin.</p>
              <button className="sip3">Bilet Al(pasif)</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Siparisler;
