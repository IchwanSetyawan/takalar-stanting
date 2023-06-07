import React, { useContext, useEffect } from "react";
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

const DashboardBalita = () => {
  const { datas, fetchData } = useContext(SummaryContext);
  const dataStotalbalita =
    datas.jumlah_anak_umur_0_5_bulan +
    datas.jumlah_anak_umur_6_11_bulan +
    datas.jumlah_anak_umur_12_23_bulan +
    datas.jumlah_anak_umur_24_59_bulan;
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <div className="m-8">
          <div className="mb-12">
            <AlertComponent />
          </div>
          <div>
            <div className="-mt-6">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold  text-darkHard">Wilayah</h1>
                <div className=" flex justify-center items-center text-dark  gap-4">
                  <select className="border-none py-4 pl-4 pr-32 text-md  rounded-lg shadow-smooth ">
                    <option defaultValue="3" className="text-lg" selected>
                      Tanjung Medar
                    </option>
                    <option className="text-lg" value="1">
                      Kecamatan 1
                    </option>
                    <option className="text-lg" value="2">
                      Kecamatan 2
                    </option>
                  </select>

                  <select className="border-none py-4 pl-4 pr-32 rounded-lg shadow-smooth ">
                    <option className="text-lg" value="1">
                      Kelurahan
                    </option>
                    <option className="text-lg" value="2">
                      Kelurahan 1
                    </option>
                    <option className="text-lg" value="3">
                      Kelurahan 2
                    </option>
                  </select>
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-4 mt-10">
                <RealtimeData>
                  <div className="flex flex-col space-y-8">
                    <div className="grid grid-cols-3 gap-5">
                      <CardRealtimeVer
                        name="Total Balita Tercatat"
                        total={datas.jumlah_balita_tercatat}
                        icon={PersonsIcon}
                      />
                      <CardRealtimeVer
                        name="Laki-laki"
                        total={datas.jumlah_anak_laki_laki}
                        icon={PersonMan}
                      />
                      <CardRealtimeVer
                        name="Perempuan"
                        total={datas.jumlah_anak_perempuan}
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
                    total={datas.jumlah_remaja}
                    icon={RemajaIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Calon Pengantin"
                    total={datas.jumlah_calon_pengantin}
                    icon={CalonPengantinIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Ibu Hamil"
                    total={datas.jumlah_ibu_hamil}
                    icon={MotherPregnantIcon}
                  />
                  <CardPeriodik
                    name="Jumlah Ibu Menyusui"
                    total={datas.jumlah_ibu_menyusui}
                    icon={BreastFeedingMothers}
                  />
                  <CardPeriodik
                    name="Jumlah Anak Usia 0-59 bulan"
                    total={dataStotalbalita}
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
