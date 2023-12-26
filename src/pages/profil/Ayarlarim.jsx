import React from "react";
import Navbardarklogin from "../../components/Navbardarklogin";
import Footer from "../../components/Footer";
import Sidebarprofil from "./Sidebarprofil";
import "./Ayarlarim.css";

function Ayarlarim() {
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
          <div style={{width:"100%", margin:"2rem"}}>
          <h2 className="sipa1 ">Ayarlarım</h2>
            <div className=" ayar2"><span className="ayar1">SMS ile bilgilendirme</span>
            <div className="form-check form-switch form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckReverse"
                checked
              />
            </div>
            </div>
            <div className=" ayar2"><span className="ayar1">SMS ile bilgilendirme</span>
            <div className="form-check form-switch form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckReverse"
                checked
              />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ayarlarim;
