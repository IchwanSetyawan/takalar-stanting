import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const RekomendasiContext = createContext();

export const RekomendasiContextProvider = ({ children }) => {
  const [rekomendasiData, setRekomendasiData] = useState([]);

  useEffect(() => {
    const fetchDataRekomendasi = async () => {
      try {
        const token = localStorage.getItem("token");
        const url =
          "https://stunting.ahadnikah.com/api/admin/dashboard/rekomendasi";
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(url, payload);
        setRekomendasiData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataRekomendasi();
  }, []);

  console.log({ rekomendasiData });

  return (
    <RekomendasiContext.Provider value={{ rekomendasiData }}>
      {children}
    </RekomendasiContext.Provider>
  );
};
