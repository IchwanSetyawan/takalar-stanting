import React, { useContext, createContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import CardWilayah from "../../components/CardWilayah";
import babyIcon from "../../assets/icon/baby2-icon.svg";
import childCareIcon from "../../assets/icon/child-care-icon.svg";
import "moment/locale/id";

import { SummaryContext } from "../../context/SummaryContext";

const DashboardBapakAsuh = () => {
  // const { roles } = useContext(authContext);
  const {
    datas,
    kecamatanList,
    kelurahanList,
    kecamatanId,
    setKecamatanId,
    kelurahanId,
    setKelurahanId,
  } = useContext(SummaryContext);

  const handleKecamatanChange = (event) => {
    const getkecamatanid = event.target.value;
    setKecamatanId(getkecamatanid);
  };
  const handleKelurahanChange = (event) => {
    const getkelurahanid = event.target.value;
    setKelurahanId(getkelurahanid);
  };

  return (
    <>
      <Layout>
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
          <div className="bg-white my-8 px-4 py-2  rounded-lg">
            <div className=" flex justify-between items-center">
              <h2 className="text-xl  text-dark font-bold">
                Ringkasan Per Wilayah
              </h2>
            </div>

            <div className="flex justify-between gap-x-5 my-8">
              <CardWilayah title="Jumlah Bapak Asuh" total="26" />
              <CardWilayah title="Jumlah Anak Asuh" total="35" />
              <CardWilayah title="Rata-rata kunjungan" total="277" />
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-4 mt-10">
            <div className="p-6 bg-white h-auto rounded-lg ">
              <div className="flex justify-start items-center gap-6">
                <img src={babyIcon} alt="baby icon" />
                <h2 className="text-xl font-bold text-[#252A35]">
                  Anak Asuh Baduta
                </h2>
              </div>
              <div className="mt-8 border border-[#dddddd] rounded-md ">
                {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-[#dddddd] px-6 h-20"
                  >
                    <p className="text-base text-[#252525]">
                      Jumlah anak asuh yang tidak ASI
                    </p>
                    <p className="text-base text-primary font-bold">876</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white h-auto rounded-lg ">
              <div className="flex justify-start items-center gap-6">
                <img src={childCareIcon} alt="baby icon" />
                <h2 className="text-xl font-bold text-[#252A35]">
                  Anak Asuh Bumil KEK
                </h2>
              </div>
              <div className="mt-8 border border-[#dddddd] rounded-md ">
                {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-[#dddddd] px-6 h-20"
                  >
                    <p className="text-base text-[#252525]">
                      Jumlah Anak Asuh yang status Bumil KEK yang mengkonsumsi
                      PMT yang tidak ASI
                    </p>
                    <p className="text-base text-primary font-bold">876</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBapakAsuh;
