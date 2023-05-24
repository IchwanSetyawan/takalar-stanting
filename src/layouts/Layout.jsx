import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <div className="p-6">
          <div className="h-screen p-4 bg-white ">{children}</div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
