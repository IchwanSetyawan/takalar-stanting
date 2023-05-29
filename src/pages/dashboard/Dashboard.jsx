import React, { useContext } from "react";
import { TabMenuContext } from "../../context/TabMenuContext";
import Layout from "../../layouts/Layout";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import MapImage from "../../assets/image/takalar.png";
import CardIntervensi from "../../components/CardIntervensi";
import CardWilayah from "../../components/CardWilayah";

const Dashboard = () => {
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  return (
    <>
      <Layout>
        <div>
          <div className="p-4 -mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-base font-medium  text-darkHard">
                Ringkasan /
              </h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select className="border py-4 pl-4 pr-32 text-md  rounded-lg border-darkHard">
                  <option className="text-xs" selected>
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
              <RealtimeData />
              <PeriodikData />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl  text-dark font-bold">
              Ringkasan Per Wilayah
            </h2>

            <div className="flex justify-between gap-5 my-8">
              <CardWilayah title="kecamatan" total="26" />
              <CardWilayah title="Puskesmas" total="35" />
              <CardWilayah title="kecamatan" total="277" />
              <CardWilayah title="Desa/Kelurahan" total="26" />
            </div>

            <div className="bg-blue-200 h-screen mb-8 ">
              <div className="flex justify-center items-center">
                <div className="bg-primary h-screen w-full">
                  <img src={MapImage} alt="map" className="w-full" />
                </div>
              </div>
            </div>
            <div>
              <CardIntervensi />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
