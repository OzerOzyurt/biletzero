import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarprofil.css"
import { MainContext } from "../../MainContext";
import { BsBell } from "react-icons/bs";

function Sidebar() {
  const {user} =useContext(MainContext)
  return (
    <div className="sbprofildiv">
      <span className="sidebarprofil sdhos" > {
            user ? <span style={{ color: "white" }}> Hoşgeldin {user.name} </span> : null
          } <BsBell /></span>

      <NavLink className="sidebarprofil" to="/Siparislerim">Siparişlerim</NavLink>

      <NavLink className="sidebarprofil" to="/Hesabim">
        Hesabım
      </NavLink>

      <NavLink className="sidebarprofil" to="/Ayarlarim">
        Ayarlarım
      </NavLink>

      
    </div>
  );
}

export default Sidebar;
