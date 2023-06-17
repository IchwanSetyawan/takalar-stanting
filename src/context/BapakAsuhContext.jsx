import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BapakAsuhContext = createContext();

export const BapakAsuhContextProvider = ({ children }) => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const dataStotalbalita =
    datas.jumlah_anak_umur_0_5_bulan +
    datas.jumlah_anak_umur_6_11_bulan +
    datas.jumlah_anak_umur_12_23_bulan +
    datas.jumlah_anak_umur_24_59_bulan;

  useEffect(() => {
    const fetchDataAll = async () => {
      try {
        const token = localStorage.getItem("token");
        if (kecamatanId && kelurahanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh/${kecamatanId}/${kelurahanId}`;
          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(url, payload)
            .then((response) => {
              setIsLoading(true);
              setDatas(response.data);
            })
            .catch((error) => {
              setIsLoading(false);
              console.log(error);
            });
        } else if (kecamatanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh/${kecamatanId}`;
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDatas(response.data);
        } else {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/bapak-asuh`;

          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(url, payload)
            .then((response) => {
              setIsLoading(true);
              setDatas(response.data);
            })
            .catch((error) => {
              setIsLoading(false);
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAll();
  }, [kecamatanId, kelurahanId]);

  useEffect(() => {
    const fetchDataKec = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setKecamatanList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataKec();
  }, []);

  useEffect(() => {
    const fetchDataKelurahan = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `https://stunting.ahadnikah.com/api/wilayah/desa`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setKelurahanList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataKelurahan();
  }, []);

  return (
    <BapakAsuhContext.Provider
      value={{
        datas,
        dataStotalbalita,

        kecamatanList,
        setKecamatanList,

        kelurahanList,
        setKelurahanList,

        kecamatanId,
        setKecamatanId,

        kelurahanId,
        setKelurahanId,

        isLoading,
      }}
    >
      {children}
    </BapakAsuhContext.Provider>
  );
};
