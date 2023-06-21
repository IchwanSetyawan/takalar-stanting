import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SummaryContext = createContext();

export const SummaryContextProvider = ({ children }) => {
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

  const getKecLocalstorage = localStorage.getItem("kc");

  // useEffect(() => {
  //   const findKecamatan = kecamatanList.filter(
  //     (data) => data.id == getKecLocalstorage
  //   );
  //   setKecamatanList(findKecamatan);
  //   console.log({ findKecamatan });
  //   console.log({ kecamatanList });
  // }, [getKecLocalstorage]);

  useEffect(() => {
    const fetchDataAll = async () => {
      try {
        const token = localStorage.getItem("token");
        if (kecamatanId && kelurahanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}/${kelurahanId}`;
          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(url, payload)
            .then((response) => {
              setDatas(response?.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (kecamatanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}`;
          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(url, payload)
            .then((response) => {
              setDatas(response?.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary`;
          const payload = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          axios
            .get(url, payload)
            .then((response) => {
              setDatas(response?.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAll();
  }, [kecamatanId, kelurahanId]);

  // const getLocalKel = localStorage.getItem("kl");
  // const getLocalKec = JSON.parse(localStorage.getItem("kc"));

  const fetchDataKec = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let responseData = response?.data;
      const getLocalKec = JSON.parse(localStorage.getItem("kc"));

      if (getLocalKec == null) {
        // console.log("getLocalKec:", getLocalKec);
        responseData = responseData.filter(
          (val) => val.id.toString() === getLocalKec.toString()
        );
      }
      setKecamatanList(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
    <SummaryContext.Provider
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
        getKecLocalstorage,

        // getLocalKec,
        fetchDataKec,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};
