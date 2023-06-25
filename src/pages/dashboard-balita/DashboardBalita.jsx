import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import PersonsIcon from "../../assets/icon/persons-balita-icon.svg";
import PersonMan from "../../assets/icon/person-man-icon.svg";
import PersonWoman from "../../assets/icon/persons-woman-icon.svg";
import CardRealtimeVer from "../../components/CardRealtimeVer";
import CartComponentSingle from "../../cart/CartComponentSingle";
import CardPeriodik from "../../components/CardPeriodik";

import RemajaIcon from "../../assets/icon/remaja-icon.svg";
import CalonPengantinIcon from "../../assets/icon/calon-pengantin-icon.svg";
import MotherPregnantIcon from "../../assets/icon/mother-pregnant-icon.svg";
import BreastFeedingMothers from "../../assets/icon/ibu-menyusui-icon.svg";
import BabyStroller from "../../assets/icon/baby-stroller-icon.svg";
import formattedNumber from "../../utills/formattedNumber ";
import axios from "axios";
import { TabMenuContext } from "../../context/TabMenuContext";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardBalita = () => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const dataStotalbalita =
    datas.jumlah_anak_umur_0_5_bulan +
    datas.jumlah_anak_umur_6_11_bulan +
    datas.jumlah_anak_umur_12_23_bulan +
    datas.jumlah_anak_umur_24_59_bulan;

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

  const anak_0_5 = datas.jumlah_anak_umur_0_5_bulan;
  const anak_6_11 = datas.jumlah_anak_umur_6_11_bulan;
  const anak_12_23 = datas.jumlah_anak_umur_12_23_bulan;
  const anak_24_59 = datas.jumlah_anak_umur_24_59_bulan;

  return (
    <>
      <Layout>
        <div className="m-8">
          <div>
            <div className="-mt-6">
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
                  <div className="flex flex-col space-y-8">
                    <div className="grid grid-cols-3 gap-5">
                      <CardRealtimeVer
                        name="Total Balita Tercatat"
                        total={
                          datas.jumlah_balita_tercatat
                            ? formattedNumber(datas.jumlah_balita_tercatat)
                            : 0
                        }
                        icon={PersonsIcon}
                      />
                      <CardRealtimeVer
                        name="Laki-laki"
                        total={
                          datas.jumlah_anak_laki_laki
                            ? formattedNumber(datas.jumlah_anak_laki_laki)
                            : 0
                        }
                        icon={PersonMan}
                      />
                      <CardRealtimeVer
                        name="Perempuan"
                        total={
                          datas.jumlah_anak_perempuan
                            ? formattedNumber(datas.jumlah_anak_perempuan)
                            : 0
                        }
                        icon={PersonWoman}
                      />
                    </div>

                    <div className="mt-5 border-none rounded-lg shadow-smooth  px-2 py-5">
                      <CartComponentSingle
                        datas_0_5_bulan={anak_0_5}
                        datas_6_11_bulan={anak_6_11}
                        datas_12_23_bulan={anak_12_23}
                        datas_24_59_bulan={anak_24_59}
                      />
                    </div>
                  </div>
                </RealtimeData>
                <PeriodikData>
                  <>
                    <CardPeriodik
                      name="Jumlah Remaja Putri"
                      total={
                        datas.jumlah_remaja
                          ? formattedNumber(datas.jumlah_remaja)
                          : 0
                      }
                      icon={RemajaIcon}
                    />
                    <CardPeriodik
                      name="Jumlah Calon Pengantin"
                      total={
                        datas.jumlah_calon_pengantin
                          ? formattedNumber(datas.jumlah_calon_pengantin)
                          : 0
                      }
                      icon={CalonPengantinIcon}
                    />
                    <CardPeriodik
                      name="Jumlah Ibu Hamil"
                      total={
                        datas.jumlah_ibu_hamil
                          ? formattedNumber(datas.jumlah_ibu_hamil)
                          : 0
                      }
                      icon={MotherPregnantIcon}
                    />
                    <CardPeriodik
                      name="Jumlah Ibu Menyusui"
                      total={
                        datas.jumlah_ibu_menyusui
                          ? formattedNumber(datas.jumlah_ibu_menyusui)
                          : 0
                      }
                      icon={BreastFeedingMothers}
                    />
                    <CardPeriodik
                      name="Jumlah Anak Usia 0-59 bulan"
                      total={
                        dataStotalbalita ? formattedNumber(dataStotalbalita) : 0
                      }
                      icon={BabyStroller}
                    />
                  </>
                </PeriodikData>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBalita;
