import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TabMenuContext } from "../context/TabMenuContext";
import UserIcon from "../assets/icon/user-icon.svg";
import ArrowButtonIcon from "../assets/icon/arrow-bottom-icon.svg";
import moment from "moment/moment";
import { authContext } from "../context/AuthContext";
import LiveClock from "react-live-clock";
import { Toaster, toast } from "react-hot-toast";
import { SidebarContext } from "../context/SidebarContext";
import Logo from "../assets/image/logo.png";

export const Header = () => {
  const currentDate = moment().format("dddd, D MMMM YYYY");

  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);
  const { setIsLoading } = useContext(authContext);
  const username = localStorage.getItem("1");

  useEffect(() => {
    username;
  }, []);

  const { isShowSidebar, setIsShowSidebar, handleShowSidebar } =
    useContext(SidebarContext);

  const handlerShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setTabMenu(1);
    } else if (location.pathname === "/dashboard-balita") {
      setTabMenu(2);
    } else if (location.pathname === "/sebaran") {
      setTabMenu(3);
    } else if (location.pathname === "/cakupan") {
      setTabMenu(4);
    } else if (location.pathname === "/recommendation") {
      setTabMenu(5);
    } else if (location.pathname === "/location") {
      setTabMenu(6);
    } else if (location.pathname === "/dashboard-bapakasuh") {
      setTabMenu(7);
    } else if (location.pathname === "/dashboard-news") {
      setTabMenu(8);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("1");
    localStorage.removeItem("kc");
    localStorage.removeItem("kl");
    localStorage.removeItem("roles");
    setIsLoading(false);
    setTimeout(() => {
      toast.success("Berhasil logout!");
    }, 500);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="sm:ml-60 sticky top-0 z-50">
        <div className="relative">
          <div className="py-4 px-6 bg-primary  justify-between flex items-center shadow-md">
            <div className="flex items-center gap-4">
              <button onClick={handleShowSidebar} className="md:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <h1 className="hidden md:block text-white text-xl font-semibold">
                {tabMenu === 1
                  ? "Dashboard"
                  : tabMenu === 2
                  ? "Dashboard Balita"
                  : tabMenu === 3
                  ? "Sebaran"
                  : tabMenu === 4
                  ? "Cakupan"
                  : tabMenu === 5
                  ? "Rekomendasi"
                  : tabMenu === 6
                  ? "Wilayah"
                  : tabMenu === 7
                  ? "Dashboard Bapak Asuh"
                  : tabMenu === 8
                  ? "Dashboard News"
                  : tabMenu === 9
                  ? "Unggah Artikel"
                  : ""}
              </h1>
              <div className="md:hidden  flex justify-center items-center w-28">
                <img src={Logo} alt="logo" className="w-full" />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-white text-sm hidden md:block">
                <span>{currentDate} | </span>
                <LiveClock format="HH:mm:ss" ticking={true} />
              </div>

              <div className=" cursor-pointer hover:text-gray-100">
                <div className="flex justify-end gap-2 text-white ">
                  <div>
                    <img src={UserIcon} alt="user icon" />
                  </div>
                  <button onClick={handlerShowDropdown}>
                    <div className="flex gap-2 items-center">
                      <span className=" text-sm">{username}</span>
                      {showDropdown ? (
                        <div className="rotate-180">
                          <img src={ArrowButtonIcon} />
                        </div>
                      ) : (
                        <div>
                          <img src={ArrowButtonIcon} />
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showDropdown && (
            <button
              onClick={handleLogout}
              className="absolute  right-4 top-14 flex items-center cursor-pointer "
            >
              <div className="bg-white rounded-md shadow-md w-36  flex j">
                <ul className="w-full">
                  <li className="hover:bg-slate-100 hover:rounded-md py-2 px-2 text-sm justify-end flex gap-2">
                    <div>Logout</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </button>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};
