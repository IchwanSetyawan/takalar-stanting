import React from "react";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between px-20 py-5 ">
      <Link to="/landing-page">
        <div className="logo w-[128px] h-[48px]">
          <img src={Logo} />
        </div>
      </Link>
      <div className="text-dark flex items-center gap-16">
        <Link to="/landing-page">Beranda</Link>
        <Link to="#">Daftar Wilayah</Link>
        <Link to="#">Tentang Kami</Link>
        <Link to="/login">
          <button className="px-6 py-2 border border-primary rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
