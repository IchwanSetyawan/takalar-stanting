import React, { useContext, useEffect, useState } from "react";
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
import "moment/locale/id";
import formattedNumber from "../../utills/formattedNumber ";
import CardRealtimeVer2 from "../../components/CardRealtimeVer2";
import axios from "axios";
import { TabMenuContext } from "../../context/TabMenuContext";
import CardPeriodik from "../../components/CardPeriodik";
import RemajaIcon from "../../assets/icon/remaja-icon.svg";
import CalonPengantinIcon from "../../assets/icon/calon-pengantin-icon.svg";
import MotherPregnantIcon from "../../assets/icon/mother-pregnant-icon.svg";
import BreastFeedingMothers from "../../assets/icon/ibu-menyusui-icon.svg";
import { BulanModel, TahunModel } from "../../model/BulanModel";

const Dashboard = () => {
  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  const [valueBulan, setValueBulan] = useState("");
  const [valueTahun, setValueTahun] = useState("");

  const handleFilterBulan = (event) => {
    const value = event.target.value;
    setValueBulan(value);
  };

  const handleFilterTahun = (event) => {
    const value = event.target.value;
    setValueTahun(value);
  };

  const token = localStorage.getItem("token");
  const getLocalKec = JSON.parse(localStorage.getItem("kc"));
  const getLocalKel = JSON.parse(localStorage.getItem("kl"));

  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  const pathname = window.location.pathname;
  if (pathname === "/dashboard") {
    setTabMenu(1);
  }

  useEffect(() => {
    tabMenu;
  }, [tabMenu]);

  const fetchDataKecAndKel = async () => {
    if (kecamatanId && kelurahanId) {
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}/${kelurahanId}`;
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios
        .get(url, payload)
        .then((response) => {
          setDatas(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (kecamatanId && kelurahanId && valueBulan && valueTahun) {
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}/${kelurahanId}?bulan=${valueBulan}&tahun=${valueTahun}`;
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
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
    if (kecamatanId && kelurahanId && valueBulan && valueTahun) {
      fetchDataKecAndKel();
    }
  }, [kecamatanId, kelurahanId, valueBulan, valueTahun]);

  const fetchOnlyKec = async () => {
    if (kecamatanId) {
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
    }
    if (kecamatanId && valueBulan && valueTahun) {
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}?bulan=${valueBulan}&tahun=${valueTahun}`;
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
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
    if (kecamatanId) {
      fetchOnlyKec();
    }
  }, [kecamatanId, valueTahun]);

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

  const resetFilterBulan = () => {
    setValueBulan("");
    setValueTahun("");
  };

  const handleKelurahanChange = (event) => {
    const value = event.target.value;
    if (value == "") {
      fetchOnlyKec();
    }
    resetFilterBulan();
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
        <div className="md:m-8">
          <div className="bg-white w-full my-8 px-4 py-2  rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-4 gap-5 my-8">
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
            <div className="flex flex-col md:flex-row justify-between  mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex flex-col md:flex-row   md:justify-center items-start mt-5 md:mt-0 md:items-center text-dark  gap-4">
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

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-4 mt-10">
              <RealtimeData>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          ? `${datas?.prevalensi.toFixed(0)} %`
                          : 0 + "%"
                      }
                      icon={CurveIcon}
                    />
                  </>
                </div>

                <div className="lg:mt-4 shadow-smooth  border rounded-lg mt-10  px-2 py-5">
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
                <div className="flex  justify-between items-center text-sm mb-8 mt-2 ">
                  <div className=" flex mt-4 w-full justify-between items-center text-dark  gap-4">
                    <select
                      onChange={handleFilterBulan}
                      value={valueBulan}
                      defaultValue="default"
                      disabled={!kecamatanId}
                      className="border-none shadow-smooth p-4 w-full text-md  rounded-lg "
                    >
                      <option value="">- Bulan -</option>
                      {BulanModel.map((item, idx) => (
                        <option
                          className="text-base"
                          value={item.bulan}
                          key={idx}
                        >
                          {item.bulan}
                        </option>
                      ))}
                    </select>

                    <select
                      defaultValue="default"
                      onChange={handleFilterTahun}
                      value={valueTahun}
                      disabled={!kecamatanId || !valueBulan}
                      className="border-none p-4 w-full rounded-lg shadow-smooth"
                    >
                      <option value="">- Tahun -</option>

                      {TahunModel.map((item, idx) => (
                        <option
                          className="text-base"
                          value={item.tahun}
                          key={idx}
                        >
                          {item.tahun}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <CardPeriodik
                    name="Jumlah Remaja"
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
                </div>
              </PeriodikData>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
