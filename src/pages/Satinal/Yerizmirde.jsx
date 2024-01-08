import React, { useContext, useReducer } from "react";
import Navbardark from "../../components/Navbardark";
import Footer from "../../components/Footer";
import "./Yerizmirde.css";
import { MainContext } from "../../MainContext";
import { NavLink } from "react-router-dom";

export const artir = "artir";
export const azalt = "azalt";
// export function yerde () {

export const reducer = (state, action) => {
  console.log(state.data);
  console.log(state.data2);

  console.log(state);
  console.log(action);
  switch (action.type) {
    case artir:
      return {
        data: state.data + 1,
        data2: state.data2 + state.data3,
        data3: state.data3,
      };

    case azalt:
      return state.data === 0
        ? { data: state.data, data2: state.data2, data3: state.data3 }
        : {
            data: state.data - 1,
            data2: state.data2 - state.data3,
            data3: state.data3,
          };
    default:
      return state;
  }
};

// return {data:state.data === 0 ?  state.data : { data: state.data - 1}, data2:state.data2 === 0 ? state.data2 : {data2: state.data2 - state.data3}}

function Yerizmirde() {
  const { bileta } = useContext(MainContext);
  const initialValue = {
    data: 0,
    data2: 0,
    data3: bileta,
  };
  const [count, dispatch] = useReducer(reducer, initialValue);
  // console.log("data", data)

  return (
    <div>
      <Navbardark />
      <div>
        <div className="container">
          <div className="usttaraf">
            <h5>Etkinlik Açıklaması</h5>
            <p>
              Yayınladıkları şarkılarla geniş kitlelere ulaşmayı başaran,
              Alternatif Pop müziğinin güçlü ikilisi ‘Perdenin Ardındakiler’
              yeni albümleri sonrasında gerçekleştirecekleri konser serisi ile
              dinleyicileriyle buluşuyor.
            </p>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <h3>Bilet Secimi</h3>
              <hr />

              <div className="yerizmirde1">
                <h4>A blok</h4>
                <p>06 Ekim Perşembe</p>
                <hr />
                <div className="d-flex">
                  ₺ {bileta}
                  <div className="d-flex yerizmirde2">
                    <button
                      onClick={() => {
                        dispatch({ type: azalt });
                      }}
                    >
                      azalt
                    </button>
                    <p>{count.data}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: artir });
                      }}
                    >
                      artir
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                {" "}
                <h4 className={count.data2 === 0 ? "" : "d-none"}>
                  Henüz Seçim Yapmadın
                </h4>
                <div className={count.data === 0 ? "d-none" : ""}>

                <p>{count.data2}</p>
                <div className="yerizmirtop">

                <h6>Toplam Tutar:  </h6> <h4>₺ {count.data2} </h4>
                </div>
                <button><NavLink to={"/Odeme"}>ONAYLA</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Yerizmirde;
