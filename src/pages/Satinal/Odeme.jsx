import React, { useContext, useEffect, useState } from "react";
import Navbardarklogin from "../../components/Navbardarklogin";
import Footer from "../../components/Footer";
import OdemeUst from "./OdemeUst";
import { OdemeContext } from "./OdemeContext";
import "./Odeme.css";
// import { Form } from "react-router-dom";

function Odeme() {
  const { count } = useContext(OdemeContext);
  // console.log(count);
  const bosform = {
    CVV: "",
    cardnumber: "",
    email: "",
    lastname: "",
    lasttime: "",
    name: "",
    namelastname: "",
    phonenumber: "",
  };
  const [priceInfo, setPriceInfo] = useState({});
  const [priceInfoStok, setPriceInfoStok] = useState([]);

  const handlePrice = (e) => {
    setPriceInfo((pri) => ({ ...pri, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log(priceInfo);
    // console.log(priceInfoStok);
  }, [priceInfo]);
  const handlePriceSubmit = (e) => {
    e.preventDefault();
    setPriceInfoStok((priv) => [...priv, priceInfo]);
    setPriceInfo(bosform)
  };

  return (
    <div>
      <Navbardarklogin />
      <OdemeUst />
      <form onSubmit={handlePriceSubmit}>
        <div className="odeme1">
          <div className="container d-flex p-5">
            <div className="col-8">
              <h3>İletişim Bilgileri</h3>
              {/* <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-4 w-100">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  defaultValue="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 w-100">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              
              <div className="col-md-6 w-100">
                <label htmlFor="validationCustom03" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">E-Posta Adresinizi yaziniz</div>
              </div>
              
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required
                />
                <div className="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form> */}
              <input
                onChange={handlePrice}
                className="w-100 mt-3 p-2"
                type="text"
                name="name"
                value={priceInfo.name}
                placeholder="Adınız"
                required
              />
              <input
                onChange={handlePrice}
                className="w-100 mt-3 p-2"
                type="text"
                name="lastname"
                value={priceInfo.lastname}
                placeholder="Soyadınız"
                required
              />
              <input
                onChange={handlePrice}
                className="w-100 mt-3 p-2"
                type="email"
                name="email"
                value={priceInfo.email}
                // pattern="email"
                placeholder="E-Posta Adresiniz"
                required
              />
              <input
                onChange={handlePrice}
                className="w-100 mt-3 p-2"
                type="tel"
                name="phonenumber"
                value={priceInfo.phonenumber}
                placeholder="Telefon Numaranizi Yaziniz"
                minLength={11}
                maxLength={11}
                required
              />
              <h3 className="mt-5">Ödeme Yöntemleri</h3>
              <div className="border border-5 p-3">
                <input className="rounded-circle" type="checkbox" />
                <label htmlFor="">Kredi/Banka Kartı ile Öde</label>
                <input
                  onChange={handlePrice}
                  className="w-100 mt-3 p-2"
                  type="text"
                  value={priceInfo.cardnumber}
                  name="cardnumber"
                  placeholder="Kredi Karti Numaraniz"
                  required
                />
                <input
                  onChange={handlePrice}
                  className="w-100 mt-3 p-2"
                  type="text"
                  name="namelastname"
                  value={priceInfo.namelastname}
                  placeholder="Adınız Soyadınız"
                  required
                />
                <input
                  onChange={handlePrice}
                  className="w-50 mt-3"
                  type="text"
                  name="lasttime"
                  value={priceInfo.lasttime}
                  placeholder="Son Kullanma Tarihi"
                />
                <input
                  onChange={handlePrice}
                  className="w-50"
                  type="text"
                  name="CVV"
                  value={priceInfo.CVV}
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="col-4  ">
              <div className="border border-5 p-3 ms-3 ">
                <h3>Sipariş Özeti </h3>
                <div className="mb-3 mt-3">
                  <span>{count.data} adet bilet aldınız </span>
                </div>
                <div>
                  <span> Toplam Tutar: ₺ {count.data2}</span>
                  <div className="d-flex mt-3">
                    <input className="d-block" type="checkbox" required />
                    <label className="d-block ms-2" htmlFor="">
                      Aydınlatma Metnini okudum, onaylıyorum.
                    </label>
                  </div>

                  <button type="submit" className="mt-5 odemeonay">
                    Onay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Odeme;
