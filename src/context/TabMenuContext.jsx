import React, { createContext, useState } from "react";

export const TabMenuContext = createContext();

const TabMenuContextProvider = ({ children }) => {
  const [tabMenu, setTabMenu] = useState(1);

  return (
    <TabMenuContext.Provider value={{ tabMenu, setTabMenu }}>
      {children}
    </TabMenuContext.Provider>
  );
};

export default TabMenuContextProvider;
