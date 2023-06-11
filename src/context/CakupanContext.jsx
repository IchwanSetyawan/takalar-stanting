import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CakupanContext = createContext();

export const CakupanContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url =
        "https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data === null) {
        return;
      }
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CakupanContext.Provider value={{ datas, fetchData }}>
      {children}
    </CakupanContext.Provider>
  );
};
