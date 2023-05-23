import React from "react";
import Logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <>
      <div className="sm:ml-48">
        <div className="border-t-2 border-gray-500 p-6 mb-8 flex justify-between ">
          <div className="">
            <div className="flex gap-2  items-center">
              <h1 className="text-[#252A35] text-lg font-semibold">
                TAKALAR STUNTING
              </h1>
              <span className="">&copy; 2023</span>
            </div>
            <p className="text-[#867050] text-md">Sumedang Digital</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#252A35] font-semibold">Didukung oleh :</p>
            <div className="w-48">
              <img src={Logo} alt="support logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
