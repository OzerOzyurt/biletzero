import { createContext } from "react";
import App from "./App";

const MainContext = createContext();

function MainContextProvider (){
    const data = {
        
    }
    return (
        <div>
            <MainContext.Provider value={data}>
                <App/>
            </MainContext.Provider>
        </div>
    )

}















import React from 'react'
import App from "./App";

function MainContex() {
  return (
    <div>MainContex</div>
  )
}

export default MainContex