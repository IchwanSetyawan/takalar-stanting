import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const KelurahanContext = createContext();

export const KelurahanContextProvider = ({ children }) => {
  const [kelurahanData, setKelurahanData] = useState([]);

  const fetchData = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://stunting.ahadnikah.com/api/wilayah/desa/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setKelurahanData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KelurahanContext.Provider value={{ kelurahanData, fetchData }}>
      {children}
    </KelurahanContext.Provider>
  );
};
