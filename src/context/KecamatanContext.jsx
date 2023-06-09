import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const KecamatanContext = createContext();

export const KecamatanContextProvider = ({ children }) => {
  const [kecamatanData, setKecamatanData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setKecamatanData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <KecamatanContext.Provider value={{ kecamatanData, fetchData }}>
      {children}
    </KecamatanContext.Provider>
  );
};
