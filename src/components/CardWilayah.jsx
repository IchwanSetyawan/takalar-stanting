import React from "react";

const CardWilayah = ({ title, total }) => {
  return (
    <>
      <div className="bg-primary p-4 w-full  md:w-[12.5rem] h-[5.5rem] rounded-lg hover:bg-[#1082da]">
        <div className="text-center">
          <h1 className="text-light font-semibold text-lg">{total}</h1>
          <p className="text-light font-medium text-sm">{title}</p>
        </div>
      </div>
    </>
  );
};

export default CardWilayah;
