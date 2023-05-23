import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <div className="p-6">
          <div className="h-screen bg-white flex justify-center items-center">
            <h1 className="text-2xl font-semibold">Ini konten</h1>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Layout;
