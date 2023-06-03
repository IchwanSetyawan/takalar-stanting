import React from "react";
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

const DashboardBalita = () => {
  const data = [
    {
      id: 1,
      total: "876",
      title: "Total Balita Tercatat",
      icon: PersonsIcon,
    },
    {
      id: 2,
      total: "222",
      title: "Laki-laki",
      icon: PersonMan,
    },
    {
      id: 3,
      total: "213",
      title: "Perempuan",
      icon: PersonWoman,
    },
  ];

  const dataPeriodik = [
    {
      id: 1,
      name: "Jumlah Remaja",
      total: "1.738",
      icon: RemajaIcon,
    },
    {
      id: 2,
      name: "Jumlah Calon Pengantin",
      total: "336",
      icon: CalonPengantinIcon,
    },
    {
      id: 3,
      name: "Jumlah Ibu Hamil",
      total: "123",
      icon: MotherPregnantIcon,
    },
    {
      id: 4,
      name: "Jumlah Ibu Menyusui",
      total: "214",
      icon: BreastFeedingMothers,
    },
    {
      id: 5,
      name: "Jumlah Anak Usia 0-59 bulan",
      total: "355",
      icon: BabyStroller,
    },
  ];
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
              <RealtimeData>
                <div className="flex flex-col space-y-8">
                  <div className="grid grid-cols-3 gap-5">
                    {data.map((item) => (
                      <CardRealtimeVer
                        key={item.id}
                        name={item.title}
                        total={item.total}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                  <div className="mt-5 border rounded-lg border-darkSmooth px-2 py-5">
                    <CartComponentSingle />
                  </div>
                </div>
              </RealtimeData>
              <PeriodikData>
                {dataPeriodik.map((item) => (
                  <CardPeriodik
                    key={item.id}
                    name={item.name}
                    icon={item?.icon}
                    total={item.total}
                  />
                ))}
              </PeriodikData>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardBalita;
