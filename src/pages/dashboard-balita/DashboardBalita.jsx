import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import AlertComponent from "../../components/AlertComponent";
import RealtimeData from "../../components/RealtimeData";
import PeriodikData from "../../components/PeriodikData";
import PersonsIcon from "../../assets/icon/persons-balita-icon.svg";
import PersonMan from "../../assets/icon/person-man-icon.svg";
import PersonWoman from "../../assets/icon/persons-woman-icon.svg";
import CardRealtimeVer from "../../components/CardRealtimeVer";
import CartComponentSingle from "../../cart/CartComponentSingle";
import CardPeriodik from "../../components/CardPeriodik";

import RemajaIcon from "../../assets/icon/remaja-icon.svg";
import CalonPengantinIcon from "../../assets/icon/calon-pengantin-icon.svg";
import MotherPregnantIcon from "../../assets/icon/mother-pregnant-icon.svg";
import BreastFeedingMothers from "../../assets/icon/ibu-menyusui-icon.svg";
import BabyStroller from "../../assets/icon/baby-stroller-icon.svg";
import { SummaryContext } from "../../context/SummaryContext";
import formattedNumber from "../../utills/formattedNumber ";
import axios from "axios";

const DashboardBalita = () => {
  const {
    datas,
    kecamatanList,
    kelurahanList,
    kecamatanId,
    setKecamatanId,
    kelurahanId,
    setKelurahanId,
    dataStotalbalita,
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
        <div className="m-8">
          <div>
            <div className="-mt-6">
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
                  <div className="flex flex-col space-y-8">
                    <div className="grid grid-cols-3 gap-5">
                      <CardRealtimeVer
                        name="Total Balita Tercatat"
                        total={formattedNumber(datas.jumlah_balita_tercatat)}
                        icon={PersonsIcon}
                      />
                      <CardRealtimeVer
                        name="Laki-laki"
                        total={formattedNumber(datas.jumlah_anak_laki_laki)}
                        icon={PersonMan}
                      />
                      <CardRealtimeVer
                        name="Perempuan"
                        total={formattedNumber(datas.jumlah_anak_perempuan)}
                        icon={PersonWoman}
                      />
                    </div>
                    <div className="mt-5 border-none rounded-lg shadow-smooth  px-2 py-5">
                      <CartComponentSingle />
                    </div>
                  </div>
                </RealtimeData>
                <PeriodikData>
                  <CardPeriodik
                    name="Jumlah Remaja"
                    total={formattedNumber(datas.jumlah_remaja)}
                    icon={RemajaIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Calon Pengantin"
                    total={formattedNumber(datas.jumlah_calon_pengantin)}
                    icon={CalonPengantinIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Ibu Hamil"
                    total={formattedNumber(datas.jumlah_ibu_hamil)}
                    icon={MotherPregnantIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Ibu Menyusui"
                    total={formattedNumber(datas.jumlah_ibu_menyusui)}
                    icon={BreastFeedingMothers}
                  />
                  <CardPeriodik
                    name="Jumlah Anak Usia 0-59 bulan"
                    total={formattedNumber(dataStotalbalita)}
                    icon={BabyStroller}
                  />
                </PeriodikData>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBalita;
