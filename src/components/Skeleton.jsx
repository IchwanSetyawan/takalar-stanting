import React from "react";

const Skeleton = ({ height, width }) => {
  return (
    <>
      <div role="status" className="max-w-sm animate-pulse">
        <div
          className={`h-[${height}px] bg-gray-200 rounded-lg  dark:bg-gray-700 w-[${width}px] mb-4`}
        ></div>
      </div>
    </>
  );
};

export default Skeleton;
