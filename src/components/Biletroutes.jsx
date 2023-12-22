import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Members from "../pages/Members";
import Home from "../pages/Home";
import Singup from "../pages/Singup";
import Notfound from "../pages/Notfound";

function Biletroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default Biletroutes;
