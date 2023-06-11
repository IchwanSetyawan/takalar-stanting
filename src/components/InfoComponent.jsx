import React from "react";

const InfoComponent = ({ id, handleClose }) => {
  return (
    <>
      <div className="border absolute w-full  right-0 top-6 z-50 bg-primary rounded-lg px-4 flex-col flex justify-start text-white text-sm">
        <div className="flex justify-end pt-2">
          <button onClick={handleClose} className="text-xs text-white">
            X
          </button>
        </div>
        <div className="pb-3">
          <p>ini adalah halaman info-{id}</p>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
