import React, { useContext, createContext, useEffect, useState } from "react";
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
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

import { authContext } from "../../context/AuthContext";
import { SummaryContext } from "../../context/SummaryContext";
import { KecamatanContext } from "../../context/KecamatanContext";
import { KelurahanContext } from "../../context/KelurahanContext";
import formattedNumber from "../../utills/formattedNumber ";
import CardRealtimeVer2 from "../../components/CardRealtimeVer2";

const Dashboard = () => {
  // const { roles } = useContext(authContext);
  // const { datas, fetchData } = useContext(SummaryContext);

  const [kecamatanList, setKecamatanList] = useState([]);
  const [kelurahanList, setKelurahanList] = useState([]);
  const [kecamatanId, setKecamatanId] = useState("");
  const [kelurahanId, setKelurahanId] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchDataAll = async () => {
      try {
        const token = localStorage.getItem("token");
        if (kecamatanId && kelurahanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}/${kelurahanId}`;
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDatas(response.data);
        } else if (kecamatanId) {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary/${kecamatanId}`;
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDatas(response.data);
        } else {
          const url = `https://stunting.ahadnikah.com/api/admin/dashboard/summary`;

          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setDatas(response.data);
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

  const handleKecamatanChange = (event) => {
    const getkecamatanid = event.target.value;
    setKecamatanId(getkecamatanid);
  };
  const handleKelurahanChange = (event) => {
    const getkelurahanid = event.target.value;
    setKelurahanId(getkelurahanid);
  };

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
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select
                  className="w-72"
                  value={kecamatanId}
                  onChange={(e) => handleKecamatanChange(e)}
                >
                  <option value="">Kecamatan</option>
                  {kecamatanList.map((kec, idx) => (
                    <option key={idx} value={kec.id}>
                      {kec.kecamatan}
                    </option>
                  ))}
                </select>

                <select
                  className="w-72"
                  value={kelurahanId}
                  onChange={(e) => handleKelurahanChange(e)}
                  disabled={!kecamatanId}
                >
                  <option value="">Kelurahan</option>
                  {kelurahanList
                    ?.filter((item) => item.id_kecamatan == kecamatanId)
                    .map((kel, idx) => (
                      <option key={idx} value={kel.id}>
                        {kel.desa}
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
                    total={formattedNumber(datas.jumlah_keluarga)}
                    icon={FamilyIcon}
                  />
                  <CardRealtimeHor
                    name="Keluarga beresiko Stunting"
                    total={formattedNumber(datas.jumlah_keluarga_beresiko)}
                    icon={WarningIcon}
                  />
                  <CardRealtimeHor
                    name="Jumlah Keluarga Sasaran"
                    total={formattedNumber(datas.jumlah_keluarga_sasaran)}
                    icon={FamilyTargetIcon}
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
                  total={`${datas.prevalensi_balita_stunting} %`}
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
