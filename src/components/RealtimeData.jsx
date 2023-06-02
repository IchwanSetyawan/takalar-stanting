import React from "react";
import CartHorizontal from "../cart/CartHorizontal";
import RealtImeIcon from "../assets/icon/realtime-icon.svg";
import FamilyIcon from "../assets/icon/family-icon.svg";
import PregnanIcon from "../assets/icon/pregnan-icon.svg";
import MotherChildIcon from "../assets/icon/mother-child-icon.svg";
import CurveIcon from "../assets/icon/curve-icon.svg";

const RealtimeData = () => {
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
      icon: PregnanIcon,
    },
    {
      id: 3,
      total: "2.000",
      title: "Jumlah Anak Stunting",
      icon: MotherChildIcon,
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
      <div className="col-span-2 border border-gray-400 w-full rounded-lg p-6 ">
        <div className="flex gap-4 items-center">
          <div>
            <img src={RealtImeIcon} alt="icon realtime" />
          </div>
          <h2 className="text-xl  text-dark font-bold">Realtime (Bulanan)</h2>
        </div>
        <div className="mb-4 mt-5">
          <h2 className="font-semibold text-sm text-darkHard">
            Database Balita
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-darkSmooth flex items-center justify-between "
            >
              <div className="z-10">
                <div className="justify-start flex p-6 items-center gap-4 ">
                  <div className="w-6 h-auto">
                    <img src={item.icon} alt="family-icon" />
                  </div>
                  <div>
                    <h1 className="text-dark font-bold text-xl">
                      {item.total}
                    </h1>
                    <p className="text-darkHard font-normal text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 border rounded-lg border-darkSmooth p-2 ">
          <CartHorizontal />
        </div>
      </div>
    </>
  );
};

export default RealtimeData;
