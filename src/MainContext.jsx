import { createContext, useEffect, useState } from "react";

const MainContext = createContext();

function MainContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const data = {
    user,
    setUser,
    handleLogout,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}

export { MainContext, MainContextProvider };
