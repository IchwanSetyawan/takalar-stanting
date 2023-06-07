import React, { useContext, createContext, useEffect, useState } from "react";
import { TabMenuContext } from "../../context/TabMenuContext";
import Layout from "../../layouts/Layout";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import CardWilayah from "../../components/CardWilayah";
import CardRealtimeHor from "../../components/CardRealtimeHor";
import FamilyIcon from "../../assets/icon/family-icon.svg";
import WarningIcon from "../../assets/icon/warning-icon.svg";
import CurveIcon from "../../assets/icon/curve-icon.svg";
import StuntingIcon from "../../assets/icon/stunting-icon.svg";
import CartComponent from "../../cart/CartComponent";
import Persons from "../../assets/icon/persons.svg";
import SortIcon from "../../assets/icon/sort-icon.svg";
import FatherIcon from "../../assets/icon/father-icon.svg";
import ChildIcon from "../../assets/icon/child-icon.svg";
import AccesibleIcon from "../../assets/icon/accessible-icon.svg";
import CardPeriodik from "../../components/CardPeriodik";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

import { authContext } from "../../context/AuthContext";
import LiveClock from "react-live-clock";
import { SummaryContext } from "../../context/SummaryContext";
import { KecamatanContext } from "../../context/KecamatanContext";
import { KelurahanContext } from "../../context/KelurahanContext";

const Dashboard = () => {
  const { roles } = useContext(authContext);
  const { datas, fetchData } = useContext(SummaryContext);

  const { kecamatanData, fetchData: fetchKecamatan } =
    useContext(KecamatanContext);
  const { kelurahanData, fetchData: fetchKelurahan } =
    useContext(KelurahanContext);

  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedKelurahan, setSelectedKelurahan] = useState("");

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

  useEffect(() => {
    // Mendapatkan data kecamatan dari API kecamatan
    fetchDataKec();
    // fetchDataKel();
  }, []);

  const fetchDataKel = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://stunting.ahadnikah.com/api/wilayah/desa/`;

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

  const handleKecamatanChange = (event) => {
    const kecamatan = event.target.value;
    setSelectedKecamatan(kecamatan);
    setSelectedKelurahan("");
  };
  useEffect(() => {
    if (selectedKecamatan) {
      // Mendapatkan data kelurahan berdasarkan kecamatan dari API kelurahan
      fetchDataKel();
    }
  }, [selectedKecamatan]);

  const handleKelurahanChange = (event) => {
    const kelurahan = event.target.value;
    setSelectedKelurahan(kelurahan);
  };

  const currentDate = moment().format("dddd, D MMMM YYYY");

  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="bg-white my-8 px-4 py-2  rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
              <div className="text-dark mt-2 text-lg ">
                <span>{currentDate} | </span>
                <LiveClock format="HH:mm:ss" ticking={true} />
              </div>
            </div>

            <div className="flex justify-between gap-x-5 my-8">
              <CardWilayah title="kecamatan" total={datas.total_kecamatan} />
              <CardWilayah
                title="Desa/Kelurahan"
                total={datas.total_kelurahan}
              />
              <CardWilayah title="Dusun" total={datas.total_dusun} />
              <CardWilayah
                title="Jumlah Penduduk"
                total={datas.total_penduduk}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select
                  value={selectedKecamatan}
                  onChange={handleKecamatanChange}
                >
                  <option value="">Pilih Kecamatan</option>
                  {kecamatanList.map((kecamatan) => (
                    <option key={kecamatan.id} value={kecamatan.id}>
                      {kecamatan.kecamatan}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedKelurahan}
                  onChange={handleKelurahanChange}
                  disabled={!selectedKecamatan}
                >
                  <option value="">Pilih Kelurahan</option>
                  {kelurahanList.map((kelurahan) => (
                    <option key={kelurahan.id} value={kelurahan.id}>
                      {kelurahan.desa}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-4 mt-10">
              <RealtimeData>
                <div className="grid grid-cols-2 gap-5">
                  <CardRealtimeHor
                    name="Jumlah Keluarga"
                    total={datas.jumlah_keluarga}
                    icon={FamilyIcon}
                  />
                  <CardRealtimeHor
                    name="Keluarga beresiko Stunting"
                    total={datas.jumlah_keluarga_beresiko}
                    icon={WarningIcon}
                  />
                  <CardRealtimeHor
                    name="Jumlah Anak Stunting"
                    total={datas.jumlah_anak_stunting}
                    icon={StuntingIcon}
                  />
                  <CardRealtimeHor
                    name="Prevalensi"
                    total={`${datas.prevalensi} %`}
                    icon={CurveIcon}
                  />
                </div>
                <div className="mt-4 shadow-smooth  border rounded-lg  px-2 py-5">
                  <CartComponent />
                </div>
              </RealtimeData>
              <PeriodikData>
                <CardPeriodik
                  name="Jumlah Balita yang Diukur"
                  icon={Persons}
                  total={datas.jumlah_balita_terukur}
                />
                <CardPeriodik
                  name="Jumlah Balita Stunting"
                  icon={AccesibleIcon}
                  total={datas.jumlah_anak_stunting}
                />
                <CardPeriodik
                  name="Prevalensi Balita Stunting"
                  icon={SortIcon}
                  total={`${datas.prevalensi_balita_stunting} %`}
                />
                <CardPeriodik
                  name="Total Bapak Asuh"
                  icon={FatherIcon}
                  total={datas.jumlah_bapak_asuh}
                />
                <CardPeriodik
                  name="Total Anak Asuh"
                  icon={ChildIcon}
                  total={datas.jumlah_anak_asuh}
                />
              </PeriodikData>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
