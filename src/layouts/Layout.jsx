import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const Layout = ({ children, back }) => {
  const [isBackground, setIsBackground] = useState(false);
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <div className="p-6">
          <div className="bg-white h-auto my-8 rounded-xl">{children}</div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
