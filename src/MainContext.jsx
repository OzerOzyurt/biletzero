import { createContext, useState } from "react";

const MainContext = createContext();

function MainContextProvider({ children }) {
  const [user, setUser] = useState(null);

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
