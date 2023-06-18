import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SebaranContext = createContext();

export const SebaranContextProvider = ({ children }) => {
  const [sebaranData, setSebaranData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "https://stunting.ahadnikah.com/api/admin/dashboard/sebaran";

      const response = await axios.get(url);
      setSebaranData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SebaranContext.Provider value={{ sebaranData, fetchData }}>
      {children}
    </SebaranContext.Provider>
  );
};
