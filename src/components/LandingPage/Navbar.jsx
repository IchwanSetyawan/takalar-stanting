import React from "react";
import Logo from "../../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between px-20 py-5 ">
      <Link to="/">
        <div className="logo w-[128px] h-[48px]">
          <img src={Logo} />
        </div>
      </Link>
      <div className="text-dark flex items-center gap-16">
        <Link to="/" className="hover:text-blue-700 font-bold">
          Beranda
        </Link>
        <Link className="hover:text-blue-700 font-bold" to="#">
          Daftar Wilayah
        </Link>
        <Link className="hover:text-blue-700 font-bold" to="/news">
          Berita
        </Link>
        <Link className="hover:text-blue-700 font-bold" to="/tentang-kami">
          Tentang Kami
        </Link>
        <Link className="hover:text-blue-700 font-bold" to="/login">
          <button className="px-6 py-2 border border-primary rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
