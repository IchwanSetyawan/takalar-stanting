import React, { useContext, createContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import CardWilayah from "../../components/CardWilayah";
import babyIcon from "../../assets/icon/baby2-icon.svg";
import childCareIcon from "../../assets/icon/child-care-icon.svg";
import "moment/locale/id";

import { SummaryContext } from "../../context/SummaryContext";
import formattedNumber from "../../utills/formattedNumber ";
import AsuhComponentList from "../../components/AsuhComponentList";
import { BapakAsuhContext } from "../../context/BapakAsuhContext";
import Skeleton from "../../components/Skeleton";

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
    isLoading,
  } = useContext(BapakAsuhContext);

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
              <>
                <CardWilayah
                  title="Jumlah Bapak Asuh"
                  total={formattedNumber(datas.jml_bapak_asuh)}
                />
                <CardWilayah
                  title="Jumlah Anak Asuh"
                  total={formattedNumber(datas.jml_anak_asuh)}
                />
                <CardWilayah
                  title="Rata-rata kunjungan"
                  total={formattedNumber(datas.rt_kunjungan)}
                />
              </>
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
                <AsuhComponentList
                  title="Jumlah anak asuh yang tidak ASI"
                  total={
                    datas.jml_anak_yang_tidak_asi
                      ? formattedNumber(datas.jml_anak_yang_tidak_asi)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata pertumbuhan panjang dan berat badan Anak"
                  total={
                    datas.rt_pertumbuhan_panjang_berat_anak
                      ? formattedNumber(
                          datas?.rt_pertumbuhan_panjang_berat_anak.toFixed(1)
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah panjang badannya"
                  total={
                    datas.jml_baduta_bertambah_panjang_badan
                      ? formattedNumber(
                          datas.jml_baduta_bertambah_panjang_badan
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah berat badannya"
                  total={
                    datas.jml_baduta_bertambah_berat_badan
                      ? formattedNumber(datas.jml_baduta_bertambah_berat_badan)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata komsumsi protein hewani"
                  total={
                    datas.rt_komsumsi_baduta_protein_hewani
                      ? formattedNumber(
                          datas.rt_komsumsi_baduta_protein_hewani.toFixed(1)
                        )
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Persentase yang mengkomsumsi protein hewani"
                  total={`${
                    datas.persentase_baduta_komsumsi_protein
                      ? formattedNumber(
                          datas.persentase_baduta_komsumsi_protein
                        )
                      : 0
                  }%`}
                />
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
                <AsuhComponentList
                  title="Jumlah yang mengkonsumsi PMT yang tidak ASI"
                  total={
                    datas.jml_bumil_komsumsi_pmt_tidak_asi
                      ? formattedNumber(datas.jml_bumil_komsumsi_pmt_tidak_asi)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang mengkonsumsi TTD/MMS"
                  total={
                    datas.jml_bumil_komsumsi_ttd_mms
                      ? formattedNumber(datas.jml_bumil_komsumsi_ttd_mms)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Jumlah yang bertambah ukuran LILAnya"
                  total={
                    datas.jml_bumil_yang_bertambah_lila
                      ? formattedNumber(datas.jml_bumil_yang_bertambah_lila)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Rata-rata makan per hari"
                  total={
                    datas.rt_makan_perhari_bumilkek
                      ? formattedNumber(datas.rt_makan_perhari_bumilkek)
                      : 0
                  }
                />
                <AsuhComponentList
                  title="Presentase yang mengkonsumsi buah-buahan"
                  total={`${
                    datas.persentase_bumilkek_komsumsi_buah
                      ? formattedNumber(datas.persentase_bumilkek_komsumsi_buah)
                      : 0
                  }%`}
                />

                <AsuhComponentList
                  title="Presentase yang mengkonsumsi protein hewani"
                  total={`${
                    datas.persentase_bumilkek_komsumsi_buah
                      ? formattedNumber(datas.persentase_bumilkek_komsumsi_buah)
                      : 0
                  }%`}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBapakAsuh;
