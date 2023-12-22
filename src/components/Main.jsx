import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCalendar2Check } from "react-icons/bs";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";

function Main() {
  return (
    <div className="mainbilet ">
      <div className="container content">
        <h1>
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
        <a id="buy-ticket-btn">
          <span className="buy-ticket">BİLET AL</span>
          <span className="tz-arrow-down-right"></span>
        </a>
      </div>
    </div>
  );
}

export default Main;
