import React  from "react";
import {  Route, Routes } from "react-router-dom";
import Members from "../pages/Members";
import Home from "../pages/Home";
import Singup from "../pages/Singup";
import Notfound from "../pages/Notfound";
import Hakkimizda from "../pages/about/Hakkimizda";
import UyelikSözlesmesi from "../pages/about/UyelikSözlesmesi";
import UrunHizmet from "../pages/about/UrunHizmet";
import TicariElektronik from "../pages/about/TicariElektronik";
import SikcaSorulan from "../pages/about/SikcaSorulan";
import CerezPolitikasi from "../pages/about/CerezPolitikasi";
import UyelikIslem from "../pages/about/Uyelikİslem";
import Iletisim from "../pages/about/Iletisim";
import Yerizmirde from "../pages/Satinal/Yerizmirde";
import Siparisler from "../pages/profil/Siparisler";
import Hesabim from "../pages/profil/Hesabim";
import Ayarlarim from "../pages/profil/Ayarlarim";
import Section from "./Section";
import Privateroute from "./Privateroute";
import Odeme from "../pages/Satinal/Odeme";
// import { MainContext } from "../MainContext";



function Biletroutes() {  
 
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
        <Route path="/UyelikSözlesmesi" element={<UyelikSözlesmesi />} />
        <Route path="/UrunHizmet" element={<UrunHizmet />} />
        <Route path="/TicariElektronik" element={<TicariElektronik />} />
        <Route path="/SikcaSorulan" element={<SikcaSorulan />} />
        <Route path="/CerezPolitikasi" element={<CerezPolitikasi />} />
        <Route path="/UyelikIslem" element={<UyelikIslem />} />
        <Route path="/Iletisim" element={<Iletisim />} />
        <Route path="/Yerizmirde" element={<Yerizmirde/>}/>
        <Route path="/Odeme" element={<Odeme/>}/>
        {/* <Route path="/Siparislerim" element={<Siparisler/>}/>
        <Route path="/Hesabim" element={<Hesabim/>}/> */}
        <Route path="Ayarlarim" element={<Ayarlarim/>}/>
        <Route path="/Siparislerim" element={<Privateroute  > <Siparisler/> </Privateroute>}/>
        <Route path="/Hesabim" element={<Privateroute  > <Hesabim/> </Privateroute>}/>
        <Route path="/./Section" element={<Section/>}/>
      </Routes>
    </div>
  );
}

export default Biletroutes;
