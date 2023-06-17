import React from "react";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between px-20 py-5 ">
      <div className="logo w-[128px] h-[48px]">
        <img src={Logo} />
      </div>
      <div className="text-dark flex items-center gap-16">
        <a href="#">Beranda</a>
        <a href="#">Daftar Wilayah</a>
        <a href="#">Tentang Kami</a>
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
