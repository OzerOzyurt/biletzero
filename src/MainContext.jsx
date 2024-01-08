import { createContext, useEffect, useState } from "react";
import Privateroute from "./components/Privateroute";

const MainContext = createContext();

function MainContextProvider({ children }) {
  const [user, setUser] = useState({id: 1, name:"testuye"});
  

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const [bileta,setBileta] =useState(200)

  const data = {
    user,
    setUser,
    handleLogout,
    bileta,
    setBileta,   
    
  };

  

  return <MainContext.Provider value={data}>{children}
  </MainContext.Provider>;
}

<MainContextProvider>
<Privateroute/>
</MainContextProvider>
export { MainContext, MainContextProvider };
