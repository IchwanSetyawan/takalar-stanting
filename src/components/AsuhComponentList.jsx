import React from "react";

const AsuhComponentList = ({ title, total }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 border-b border-[#dddddd] px-6 h-20">
        <p className="text-base text-[#252525]">{title}</p>
        <p className="text-base text-primary font-bold">{total}</p>
      </div>
    </>
  );
};

export default AsuhComponentList;
