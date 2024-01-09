import { createContext, useContext } from "react";
import { MainContext } from "../../MainContext";
import { useReducer } from "react";


const OdemeContext = createContext();

export const artir = "artir";
export const azalt = "azalt";


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

function OdemeContextProvider({ children }) {
    const {bileta} = useContext(MainContext)
    console.log(bileta)
    const initialValue = {
        data: 0,
        data2: 0,
        data3: bileta,
      };
      const [count, dispatch] = useReducer(reducer, initialValue);




    const dataOdeme= {
        count,
        dispatch,
        artir,
        azalt

    }
  return (
    <OdemeContext.Provider value={dataOdeme}>{children}</OdemeContext.Provider>
  );
}


export { OdemeContext, OdemeContextProvider };
