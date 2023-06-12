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
        <div className="p-4 bg-[#F0F1F3]">
          <div className=" min-h-screen my-2 rounded-xl">{children}</div>
        </div>
      </Content>

      <Footer />
    </>
  );
};

export default Layout;
