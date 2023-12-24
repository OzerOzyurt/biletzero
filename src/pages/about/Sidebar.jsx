import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebardiv">
      <NavLink className="sidebar" to="/Hakkimizda">Hakkımızda</NavLink>

      <NavLink className="sidebar" to="/UyelikSözlesmesi">Üyelik Sözleşmesi</NavLink>

      <NavLink className="sidebar" to="/UrunHizmet">
        Ürün Hizmet Alanlara Yönelik Aydınlatma Metni
      </NavLink>

      <NavLink className="sidebar" to="/TicariElektronik">
        Ticari Elektronik İleti Aydınlatma Metni
      </NavLink>

      <NavLink className="sidebar" to="/SikcaSorulan">Sıkça Sorulan Sorular</NavLink>

      <NavLink className="sidebar" to="/CerezPolitikasi">Çerez Politikası</NavLink>

      <NavLink className="sidebar" to="/UyelikIslem">
        Üyelik İşlemlerine Yönetlik Aydınlatma Metni
      </NavLink>

      <NavLink className="sidebar" to="/Iletisim">İletişim</NavLink>
    </div>
  );
}

export default Sidebar;
