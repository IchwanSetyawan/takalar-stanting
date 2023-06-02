import React from "react";
import Layout from "../../layouts/Layout";
import AlertComponent from "../../components/AlertComponent";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";

const DashboardBalita = () => {
  return (
    <>
      <Layout>
        <div className="mb-10">
          <AlertComponent />
        </div>
        <div>
          <div className="p-4 -mt-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
              <div className=" flex justify-center items-center text-dark  gap-4">
                <select className="border py-4 pl-4 pr-32 text-md  rounded-lg border-darkHard">
                  <option defaultValue="3" className="text-xs" selected>
                    Tanjung Medar
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
        </div>
      </Layout>
    </>
  );
};

export default DashboardBalita;
