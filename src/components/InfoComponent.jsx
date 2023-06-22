import React from "react";

const InfoComponent = ({ children }) => {
  return (
    <>
      <div className="border absolute w-10/12  right-0 top-6 z-50 bg-primary rounded-lg shadow-xl px-8 pt-2 pb-4 flex-col flex justify-start text-white text-sm">
        {children}
      </div>
    </>
  );
};

export default InfoComponent;
