import React, { useContext, useEffect, useState } from "react";
import { TabMenuContext } from "../../context/TabMenuContext";
import Layout from "../../layouts/Layout";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import MapImage from "../../assets/image/takalar.png";
import CardIntervensi from "../../components/CardIntervensi";
import CardWilayah from "../../components/CardWilayah";
import CardRealtimeHor from "../../components/CardRealtimeHor";
import FamilyIcon from "../../assets/icon/family-icon.svg";
import AlertIcon from "../../assets/icon/alert-icon.svg";
import CurveIcon from "../../assets/icon/curve-icon.svg";
import StuntingIcon from "../../assets/icon/stunting-icon.svg";
import CartComponent from "../../cart/CartComponent";

import PersonPeriodik from "../../assets/icon/person-periodik-icon.svg";
import Persons from "../../assets/icon/persons.svg";
import SortIcon from "../../assets/icon/sort-icon.svg";
import FatherIcon from "../../assets/icon/father-icon.svg";
import ChildIcon from "../../assets/icon/child-icon.svg";
import AccesibleIcon from "../../assets/icon/accessible-icon.svg";
import CardPeriodik from "../../components/CardPeriodik";
import axios from "axios";
import { formattedNumber } from "../../utills/formattedNumber ";
import moment from "moment";

const Dashboard = () => {
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);
  const [datas, setDatas] = useState([]);

  const [currentTime, setCurrentTime] = useState(
    moment().format("dddd, dD MMMM YYYY | HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("dddd, dD MMMM YYYY | HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = "http://103.150.120.21:8000/api/admin/dashboard/summary";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    formattedNumber;
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="my-8 px-4 py-2 border border-gray-400 rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
              <div className="text-dark mt-2 text-lg ">
                <span>{currentTime}</span>
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
          <div className="p-4 -mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select className="border py-4 pl-4 pr-32   rounded-lg border-darkHard">
                  <option defaultValue="3" className="text-base" selected>
                    Kecamatan
                  </option>
                  <option className="text-base" value="1">
                    Kecamatan 1
                  </option>
                  <option className="text-base" value="2">
                    Kecamatan 2
                  </option>
                </select>

                <select className="border py-4 pl-4 pr-32 rounded-lg border-darkHard">
                  <option className="text-base" value="1">
                    Kelurahan
                  </option>
                  <option className="text-base" value="2">
                    Kelurahan 1
                  </option>
                  <option className="text-base" value="3">
                    Kelurahan 2
                  </option>
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
                    icon={AlertIcon}
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
                <div className="mt-4 border rounded-lg border-darkSmooth px-2 py-5">
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
