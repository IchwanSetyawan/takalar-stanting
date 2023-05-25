import React from "react";

const Content = ({ children }) => {
  return (
    <>
      <div className="sm:ml-48 bg-white">{children}</div>
    </>
  );
};

export default Content;
