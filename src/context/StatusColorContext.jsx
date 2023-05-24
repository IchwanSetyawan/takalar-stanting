import React, { useState } from "react";
import { createContext } from "react";
import { dataTable } from "../model/TableComponentModel";

export const StatusColorContext = createContext();

const StatusColorContextProvider = ({ children }) => {
  const [statusColor, setStatusColor] = useState("green");

  const data = dataTable;

  return (
    <StatusColorContext.Provider value={{ statusColor, setStatusColor }}>
      {children}
    </StatusColorContext.Provider>
  );
};

export default StatusColorContextProvider;
