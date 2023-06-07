import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CakupanContext = createContext();

export const CakupanContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "https://stunting.ahadnikah.com/api/admin/dashboard/cakupan";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CakupanContext.Provider value={{ datas, fetchData }}>
      {children}
    </CakupanContext.Provider>
  );
};
