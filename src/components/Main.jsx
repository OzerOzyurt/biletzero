import React from "react";
import "./Main.css";
import { BsCalendar2Check } from "react-icons/bs";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-scroll";


function Main() {
  return (
    <div className="mainbilet ">
      <div className="container content">
        <p className="mainh1" style={{ color: "red" }}>
          Not: bu resim değişmiş
        </p>
        <h1 className="mainh1">
          PERDENİN ARDINDAKİLER <GoArrowDownRight />
        </h1>
        <div className="event-info">
          <p className="event-date">
            <span>
              <BsCalendar2Check />
            </span>
            31 Aralık 2023
          </p>
          <p className="event-date">
            <span>
              <IoTimeOutline />
            </span>
            21:59
          </p>
          <p className="event-date">
            <span>
              <IoLocationOutline />
            </span>
            İzmir Arena
          </p>
        </div>
        <Link to="git" className="mainp" id="buy-ticket-btn">
          <span className="buy-ticket">BİLET AL</span>
          <span className="tz-arrow-down-right"></span>
        </Link>
      </div>
    </div>
  );
}

export default Main;
