import React from "react";
import "./Main.css";
import { BsCalendar2Check } from "react-icons/bs";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
// import { GoArrowDownRight } from "react-icons/go";
import { Link } from "react-scroll";
// import { RiArrowRightDownLine } from "react-icons/ri";
// import { HiMiniArrowDownRight } from "react-icons/hi2";

function Main() {
  return (
    <>
      <div className="mainbilet ">
        <div className="container content">
          <p className="mainh1" style={{ color: "red" }}>
            Not: bu resim değişmiş
          </p>
          <div className="d-flex">
            <h1 className="mainh1">
              PERDENİN ARDINDAKİLER
              <span className="mainsvg">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 10 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2224 51.6867L0 4.46421L4.46421 0L51.6866 47.2224L51.6867 2.23211H58L58 58L2.23211 58V51.6866L47.2224 51.6867Z"
                    fill="white"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className="event-info">
            <p className="event-date">
              <span className="mainspan">
                <BsCalendar2Check />
              </span>
              31 Aralık 2023
            </p>
            <p className="event-date">
              <span className="mainspan">
                <IoTimeOutline />
              </span>
              21:59
            </p>
            <p className="event-date">
              <span className="mainspan">
                <IoLocationOutline />
              </span>
              İzmir Arena
            </p>
          </div>
          <Link
            to="git"
            spy={true}
            // smooth={true}
            hashSpy={true}
            // offset={50}
            duration={8500}
            delay={83000}
            isDynamic={true}
            className="mainp"
            id="buy-ticket-btn"
          >
            <span className="buy-ticket">BİLET AL</span>
            <span className="tz-arrow-down-right"></span>
          </Link>
        </div>
      </div>
      <div className="mainbiletmobil ">
        <div className="container contentmobil">
          <p className="mainh1mobil" style={{ color: "red" }}>
            Not: bu resim değişmiş
          </p>
          <div className="d-flex">
            <h1 className="mainh1mobil">
              PERDENİN ARDINDAKİLER
              <span className="mainsvgmobil">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 3 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.797 24.9522L0 2.15514L2.15514 0L24.9522 22.797L24.9522 1.07757H28L28 28L1.07757 28V24.9522L22.797 24.9522Z"
                    fill="white"
                  />
                </svg>
              </span>
            </h1>
          </div>
          <div className="event-info">
            <p className="event-datemobil">
              <span className="mainspan">
                <BsCalendar2Check />
              </span>
              31 Aralık 2023
            </p>
            <p className="event-datemobil">
              <span className="mainspan">
                <IoTimeOutline />
              </span>
              21:59
            </p>
            <p className="event-datemobil">
              <span className="mainspan">
                <IoLocationOutline />
              </span>
              İzmir Arena
            </p>
          </div>
          <Link
            to="gitt"
            spy={true}
            // smooth={true}
            hashSpy={true}
            // offset={50}
            duration={8500}
            delay={83000}
            isDynamic={true}
            className="mainpmobil"
            id="buy-ticket-btn"
          >
            <span className="buy-ticket">BİLET AL</span>
            <span className="tz-arrow-down-right"></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
