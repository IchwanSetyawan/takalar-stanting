import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "https://stunting.ahadnikah.com/api/admin/dashboard/summary";

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
    <SummaryContext.Provider value={{ datas, fetchData }}>
      {children}
    </SummaryContext.Provider>
  );
};
