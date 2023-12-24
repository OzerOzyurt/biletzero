import React from "react";
import Navbardark from "../../components/Navbardark";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";

function about() {
  return (
    <div>
      <div>
        <Navbardark />
      </div>
      <div className="container" style={{ display: "flex" }}>
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-8" style={{ marginTop: "2rem" }}>
          <div class="step1">
            <div class="step2">
              <h2>İletişim</h2>
              <p>info@biletzero.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
