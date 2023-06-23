import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import CardWilayah from "../../components/CardWilayah";
import CardRealtimeHor from "../../components/CardRealtimeHor";
import FamilyIcon from "../../assets/icon/family-icon.svg";
import WarningIcon from "../../assets/icon/warning-icon.svg";
import CurveIcon from "../../assets/icon/curve-icon.svg";
import FamilyTargetIcon from "../../assets/icon/family-target-icon.svg";
import CartComponent from "../../cart/CartComponent";
import Persons from "../../assets/icon/persons.svg";
import SortIcon from "../../assets/icon/sort-icon.svg";
import AccesibleIcon from "../../assets/icon/accessible-icon.svg";
import "moment/locale/id";
import formattedNumber from "../../utills/formattedNumber ";
import CardRealtimeVer2 from "../../components/CardRealtimeVer2";
import axios from "axios";

const Dashboard = () => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const token = localStorage.getItem("token");
  const getLocalKec = JSON.parse(localStorage.getItem("kc"));
  const getLocalKel = JSON.parse(localStorage.getItem("kl"));

  const fetchDataKecAndKel = async () => {
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
    }
  };

  useEffect(() => {
    if (kecamatanId && kelurahanId) {
      fetchDataKecAndKel();
    }
  }, [kecamatanId, kelurahanId]);

  const fetchOnlyKec = async () => {
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
        console.warn(error);
      });
  };

  useEffect(() => {
    if (kecamatanId) {
      fetchOnlyKec();
    }
  }, [kecamatanId]);

  // get all data
  const fetchDataAll = async () => {
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
  };

  useEffect(() => {
    fetchDataAll();
  }, []);

  const getLcKecSingleFunc = () => {
    const getLcKecSingle = localStorage.getItem("kc");
    setKecamatanId(getLcKecSingle);
    setKelurahanId("");
  };

  const getLcKelSingleFunc = () => {
    const getLcKelSingle = localStorage.getItem("kl");
    setKelurahanId(getLcKelSingle);
  };

  useEffect(() => {
    getLcKecSingleFunc();
  }, []);

  const fetchDataKec = async () => {
    const token = localStorage.getItem("token");
    const url = "https://stunting.ahadnikah.com/api/wilayah/kecamatan";

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let responseData = response?.data;
    const getLocalKec = JSON.parse(localStorage.getItem("kc"));

    if (getLocalKec !== null) {
      responseData = responseData.filter((val) => val.id === getLocalKec);
    }
    setKecamatanList(responseData);
  };

  const fetchDataKelurahan = async () => {
    const token = localStorage.getItem("token");
    const url = `https://stunting.ahadnikah.com/api/wilayah/desa`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let responseData = response?.data;
    const getLocalKel = JSON.parse(localStorage.getItem("kl"));

    if (getLocalKel !== null) {
      responseData = responseData.filter((val) => val.id === getLocalKel);
      getLcKelSingleFunc();
      setKelurahanId(getLocalKec);
    }

    setKelurahanList(responseData);
  };

  const handleKecamatanChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      fetchDataAll();
    }
    setKecamatanId(value);
    resetKelurahan(value);
  };

  const resetKelurahan = (val) => {
    if (kecamatanId !== val) {
    }
    setKelurahanId("");
  };

  const handleKelurahanChange = (event) => {
    const value = event.target.value;
    if (value == "") {
      fetchOnlyKec();
    }
    setKelurahanId(value);
  };

  useEffect(() => {
    fetchDataKec();
    fetchDataKelurahan();
  }, [kecamatanId, kelurahanId]);

  const prevalensi_stunting_ssgi_2021 = datas.prevalensi_stunting_ssgi_2021;
  const prevalensi_stunting_ssgi_2022 = datas.prevalensi_stunting_ssgi_2022;
  const prevalensi_stunting_eppgbm_2021 = datas.prevalensi_stunting_eppgbm_2021;
  const prevalensi_stunting_eppgbm_2022 = datas.prevalensi_stunting_eppgbm_2022;

  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="bg-white my-8 px-4 py-2  rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
            </div>

            <div className="flex justify-between gap-x-5 my-8">
              <>
                <CardWilayah title="kecamatan" total={datas.total_kecamatan} />
                <CardWilayah
                  title="Desa/Kelurahan"
                  total={datas.total_kelurahan}
                />
                <CardWilayah
                  title="Dusun"
                  total={formattedNumber(datas.total_dusun)}
                />
                <CardWilayah
                  title="Jumlah Penduduk"
                  total={formattedNumber(datas.total_penduduk)}
                />
              </>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>

              <div className=" flex justify-center items-center text-dark  gap-4">
                <>
                  <select
                    value={kecamatanId}
                    className="w-72"
                    onChange={handleKecamatanChange}
                    disabled={kecamatanId == getLocalKec}
                  >
                    {getLocalKec === null ? (
                      <option value="">Kecamatan</option>
                    ) : null}

                    {/* {getLocalKel !== null ? (

                    ):()} */}

                    {kecamatanList.map((kec, idx) => (
                      <option key={idx} value={kec.id}>
                        {kec.kecamatan}
                      </option>
                    ))}
                  </select>

                  <select
                    value={kelurahanId}
                    className="w-72"
                    onChange={handleKelurahanChange}
                    disabled={
                      !kecamatanId ||
                      kecamatanId === "null" ||
                      kelurahanId == getLocalKel
                    }
                  >
                    {getLocalKel === null ? (
                      <option value="">Kelurahan</option>
                    ) : null}
                    {kelurahanList
                      ?.filter((item) => item.id_kecamatan == kecamatanId)
                      .map((kel, idx) => (
                        <option key={idx} value={kel.id}>
                          {kel.desa}
                        </option>
                      ))}
                  </select>
                </>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-4 mt-10">
              <RealtimeData>
                <div className="grid grid-cols-2 gap-5">
                  <>
                    <CardRealtimeHor
                      name="Jumlah Keluarga"
                      total={
                        datas.jumlah_keluarga
                          ? formattedNumber(datas?.jumlah_keluarga)
                          : 0
                      }
                      icon={FamilyIcon}
                    />
                    <CardRealtimeHor
                      name="Keluarga beresiko Stunting"
                      total={
                        datas.jumlah_keluarga_beresiko
                          ? formattedNumber(datas?.jumlah_keluarga_beresiko)
                          : 0
                      }
                      icon={WarningIcon}
                    />
                    <CardRealtimeHor
                      name="Jumlah Keluarga Sasaran"
                      total={
                        datas.jumlah_keluarga_sasaran
                          ? formattedNumber(datas?.jumlah_keluarga_sasaran)
                          : 0
                      }
                      icon={FamilyTargetIcon}
                    />
                    <CardRealtimeHor
                      name="Prevalensi"
                      total={
                        datas.prevalensi
                          ? `${datas?.prevalensi.toFixed(2)} %`
                          : 0 + "%"
                      }
                      icon={CurveIcon}
                    />
                  </>
                </div>

                <div className="mt-4 shadow-smooth  border rounded-lg  px-2 py-5">
                  <CartComponent
                    prevalensi_stunting_ssgi_2021={
                      prevalensi_stunting_ssgi_2021
                    }
                    prevalensi_stunting_ssgi_2022={
                      prevalensi_stunting_ssgi_2022
                    }
                    prevalensi_stunting_eppgbm_2021={
                      prevalensi_stunting_eppgbm_2021
                    }
                    prevalensi_stunting_eppgbm_2022={
                      prevalensi_stunting_eppgbm_2022
                    }
                  />
                </div>
              </RealtimeData>
              <PeriodikData>
                <>
                  <CardRealtimeVer2
                    name="Jumlah Balita yang Diukur"
                    icon={Persons}
                    total={formattedNumber(datas.jumlah_balita_terukur)}
                  />
                  <CardRealtimeVer2
                    icon={AccesibleIcon}
                    total={formattedNumber(
                      datas.jumlah_anak_pendek_sangat_pendek
                    )}
                    name="Jumlah Balita Pendek dan Sangat Pendek"
                  />

                  <CardRealtimeVer2
                    name="Prevalensi Balita Stunting"
                    icon={SortIcon}
                    total={`${datas?.prevalensi_balita_stunting} %`}
                  />
                </>
              </PeriodikData>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
