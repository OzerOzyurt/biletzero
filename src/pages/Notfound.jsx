import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import Footer from "../components/Footer";


function Notfound() {
  return (
    <div style={{backgroundColor:"#1e1e1e"}} >
        {/* <Navbarbilet/> */}
      <div>
        <p style={{textAlign:"center"}}>
          Bu sayfa kaldırılmış ya da değiştirilmiş olabilir. İlginizi
          çekebilecek diğer içerikler için lütfen ana sayfamızı ziyaret edin.
        </p>
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          <NavLink href="/">Ana Sayfaya Dönmek İçin Tiklayınız</NavLink>
        </Button>
      </div>
        <Footer/>
    </div>
  );
}

export default Notfound;
