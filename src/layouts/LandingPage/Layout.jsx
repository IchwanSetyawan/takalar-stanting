import React from "react";
import Content from "../../components/LandingPage/Content";

import Navbar from "../../components/LandingPage/Navbar";
import Footer from "../../components/LandingPage/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
