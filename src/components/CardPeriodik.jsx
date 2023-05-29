import React from "react";

const CardPeriodik = ({ name, total }) => {
  return (
    <>
      <div className="border border-darkSmooth  p-6 rounded-lg text-center justify-center flex  items-center gap-4">
        <div classname="flex justify-center item-center flex-col gap-2">
          <h1 className="text-primary font-semibold text-2xl">{total}</h1>
          <p className="text-darkHard font-medium text-sm">{name}</p>
        </div>
      </div>
    </>
  );
};

export default CardPeriodik;
