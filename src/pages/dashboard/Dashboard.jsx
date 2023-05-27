import React, { useContext } from "react";
import { TabMenuContext } from "../../context/TabMenuContext";
import Layout from "../../layouts/Layout";
import BabyIcon from "../../assets/icon/baby-icon.svg";
import ManIcon from "../../assets/icon/person-icon.svg";
import WomanIcon from "../../assets/icon/person-woman-icon.svg";
import CartHorizontal from "../../cart/CartHorizontal";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import MapImage from "../../assets/image/takalar.png";
import CardIntervensi from "../../components/CardIntervensi";

const Dashboard = () => {
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  return (
    <>
      <Layout>
        <div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold  text-dark">Lokasi</h1>
              <div className="flex justify-center items-center gap-2">
                <select className="cursor-pointer p-3 border-2 rounded-lg border-gray-200">
                  <option value="1">Kecamatan</option>
                  <option value="2">Kecamatan 1</option>
                  <option value="3">Kecamatan 2</option>
                </select>
                <select className="cursor-pointer p-3 border-2 rounded-lg border-gray-200">
                  <option value="1">Kelurahan</option>
                  <option value="2">Kelurahan 1</option>
                  <option value="3">Kelurahan 2</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-4">
              <RealtimeData />
              <PeriodikData />
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-dark font-semibold text-xl">
              Ringkasan Per Wilayah
            </h1>

            <div className="flex justify-between gap-5 my-8">
              <div className="bg-primary p-4 w-full rounded-lg">
                <div className="text-center">
                  <h1 className="text-light font-semibold text-xl">26</h1>
                  <p className="text-light font-medium text-sm">Kecamatan</p>
                </div>
              </div>
              <div className="bg-primary p-4 w-full rounded-lg">
                <div className="text-center">
                  <h1 className="text-light font-semibold text-xl">35</h1>
                  <p className="text-light font-medium text-sm">Puskesmas</p>
                </div>
              </div>
              <div className="bg-primary p-4 w-full rounded-lg">
                <div className="text-center">
                  <h1 className="text-light font-semibold text-xl">277</h1>
                  <p className="text-light font-medium text-sm">
                    Desa/Kelurahan
                  </p>
                </div>
              </div>
              <div className="bg-primary p-4 w-full rounded-lg">
                <div className="text-center">
                  <h1 className="text-light font-semibold text-xl">1709</h1>
                  <p className="text-light font-medium text-sm">Posyandu</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-200 h-screen mb-8">
              <div className="flex justify-center items-center">
                <div className="bg-primary h-screen w-full">
                  <img src={MapImage} alt="map" className="w-full" />
                </div>
              </div>
            </div>
            <div className="my-10">
              <CardIntervensi />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
