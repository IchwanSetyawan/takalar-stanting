import React, { useContext } from "react";
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

const Dashboard = () => {
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  const data = [
    {
      id: 1,
      total: "876",
      title: "Jumlah Keluarga",
      icon: FamilyIcon,
    },
    {
      id: 2,
      total: "1.200",
      title: "Keluarga beresiko Stunting",
      icon: AlertIcon,
    },
    {
      id: 3,
      total: "2.000",
      title: "Jumlah Anak Stunting",
      icon: StuntingIcon,
    },
    {
      id: 4,
      total: "54%",
      title: "Prevalensi",
      icon: CurveIcon,
    },
  ];

  return (
    <>
      <Layout>
        <div>
          <div className="my-8 p-4 border border-gray-400 rounded-lg">
            <h2 className="text-xl  text-dark font-bold">
              Ringkasan Per Wilayah
            </h2>

            <div className="flex justify-between gap-x-5 my-8">
              <CardWilayah title="kecamatan" total="26" />
              <CardWilayah title="Desa/Kelurahan" total="78" />
              <CardWilayah title="Dusun" total="277" />
              <CardWilayah title="Jumlah Penduduk" total="1.709" />
            </div>
          </div>
          <div className="p-4 -mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select className="border py-4 pl-4 pr-32 text-md  rounded-lg border-darkHard">
                  <option defaultValue="3" className="text-xs" selected>
                    Kecamatan
                  </option>
                  <option className="text-xs" value="1">
                    Kecamatan 1
                  </option>
                  <option className="text-xs" value="2">
                    Kecamatan 2
                  </option>
                </select>

                <select className="border py-4 pl-4 pr-32 rounded-lg border-darkHard">
                  <option className="text-xs" value="1">
                    Kelurahan
                  </option>
                  <option className="text-xs" value="2">
                    Kelurahan 1
                  </option>
                  <option className="text-xs" value="3">
                    Kelurahan 2
                  </option>
                </select>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-4 mt-10">
              <RealtimeData>
                <div className="grid grid-cols-2 gap-5">
                  {data.map((item) => (
                    <CardRealtimeHor
                      key={item.id}
                      name={item.title}
                      total={item.total}
                      icon={item.icon}
                    />
                  ))}
                </div>
                <div className="mt-4 border rounded-lg border-darkSmooth px-2 py-5">
                  <CartComponent />
                </div>
              </RealtimeData>
              <PeriodikData />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
