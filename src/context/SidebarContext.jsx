import React, { createContext, useState } from "react";
export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };
  return (
    <SidebarContext.Provider
      value={{
        isShowSidebar,
        handleShowSidebar,
        setIsShowSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
