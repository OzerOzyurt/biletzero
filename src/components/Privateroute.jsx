import React, { useContext } from "react";
import { MainContext } from "../MainContext";
import { Navigate } from "react-router-dom";

function Privateroute({ children }) {
  const { user } = useContext(MainContext);
  console.log(user.id);

  if (!user?.id) {
    return <Navigate to="/Members" replace />;
  }
  return children;
}
export default Privateroute;
