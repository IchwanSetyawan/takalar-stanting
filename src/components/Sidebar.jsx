import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/image/logo.png";
import { TabMenuContext } from "../context/TabMenuContext";
import { Link, useLocation, useParams } from "react-router-dom";
import BalitaIcon from "../assets/icon/balita-side-icon.svg";
import BapakAsuhIcon from "../assets/icon/bapakasuh-sidebar-icon.svg";
import BapakAsuhLightIcon from "../assets/icon/bapakasuhlight-sidebar-icon.svg";
import BalitaLightIcon from "../assets/icon/balita-side-light-icon.svg";
import SebaranIcon from "../assets/icon/sebaran-icon.svg";
import SebaranLightIcon from "../assets/icon/sebaran-light-icon.svg";
import CakupanIcon from "../assets/icon/cakupan-icon.svg";
import CakupanLightIcon from "../assets/icon/cakupan-light-icon.svg";
import RecommendationIcon from "../assets/icon/recommendation-icon.svg";
import RecommendationLightIcon from "../assets/icon/recommendation-light-icon.svg";
import LocationLightIcon from "../assets/icon/location-light-icon.svg";
import LocationIcon from "../assets/icon/location-icon.svg";
import NewsLightIcon from "../assets/icon/news-icon.svg";
import NewsDefaultIcon from "../assets/icon/news-default-icon.svg";
import AddNewsIcon from "../assets/icon/add-news-icon.svg";
import AddNewsLightIcon from "../assets/icon/add-news-icon-light.svg";

const Sidebar = () => {
  const location = useLocation();
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

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
    } else if (location.pathname === "/dashboard-news/add") {
      setTabMenu(9);
    }
  }, [location]);

  useEffect(() => {}, []);

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  bg-white shadow-lg flex flex-col justify-between  ">
          <div>
            <div className="flex justify-center">
              <div className="w-32 ">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="mt-9">
              <ul className="font-medium flex flex-col  text-sm">
                {localStorage.getItem("roles") === "admin-artikel" ? (
                  <>
                    <li>
                      <Link
                        to="/dashboard-news"
                        onClick={() => setTabMenu(8)}
                        className={`${
                          tabMenu === 8
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div className="text-white">
                            {tabMenu === 8 ? (
                              <img src={NewsLightIcon} />
                            ) : (
                              <img src={NewsDefaultIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Dashboard News
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard-news/add"
                        onClick={() => setTabMenu(9)}
                        className={`${
                          tabMenu === 9
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div className="text-white">
                            {tabMenu === 9 ? (
                              <img src={AddNewsLightIcon} />
                            ) : (
                              <img src={AddNewsIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Unggah Artikel
                          </span>
                        </div>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/dashboard"
                        onClick={() => setTabMenu(1)}
                        className={`${
                          tabMenu === 1
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary"
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6]"
                        }`}
                      >
                        <div className="flex items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                          </svg>

                          <span className="ml-3 text-base font-bold">
                            Dashboard
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard-balita"
                        onClick={() => setTabMenu(2)}
                        className={`${
                          tabMenu === 2
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center text-red ">
                          <div className="text-white">
                            {tabMenu === 2 ? (
                              <img src={BalitaLightIcon} />
                            ) : (
                              <img src={BalitaIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Dashboard Balita
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard-bapakasuh"
                        onClick={() => setTabMenu(7)}
                        className={`${
                          tabMenu === 7
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center text-red ">
                          <div className="text-white">
                            {tabMenu === 7 ? (
                              <img
                                src={BapakAsuhLightIcon}
                                className="w-10 p-0"
                              />
                            ) : (
                              <img src={BapakAsuhIcon} className="w-10 p-0" />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Dashboard Bapak Asuh
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/location"
                        onClick={() => setTabMenu(6)}
                        className={`${
                          tabMenu === 6
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div className="text-white">
                            {tabMenu === 6 ? (
                              <img src={LocationLightIcon} />
                            ) : (
                              <img src={LocationIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Wilayah
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sebaran"
                        onClick={() => setTabMenu(3)}
                        className={`${
                          tabMenu === 3
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div>
                            {tabMenu === 3 ? (
                              <img src={SebaranLightIcon} />
                            ) : (
                              <img src={SebaranIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Sebaran
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cakupan"
                        onClick={() => setTabMenu(4)}
                        className={`${
                          tabMenu === 4
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div className="text-white">
                            {tabMenu === 4 ? (
                              <img src={CakupanLightIcon} />
                            ) : (
                              <img src={CakupanIcon} />
                            )}
                          </div>
                          <span className="ml-3 text-base font-bold">
                            Cakupan
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/recommendation"
                        onClick={() => setTabMenu(5)}
                        className={`${
                          tabMenu === 5
                            ? "flex items-center h-16 px-4 text-white rounded-lg  bg-primary  "
                            : "flex items-center h-16 px-4 text-textGray rounded-lg   hover:bg-[#F7F7F6] "
                        }`}
                      >
                        <div className="flex items-center ">
                          <div className="text-white">
                            {tabMenu === 5 ? (
                              <img src={RecommendationLightIcon} />
                            ) : (
                              <img src={RecommendationIcon} />
                            )}
                          </div>

                          <span className="ml-3 text-base font-bold">
                            Rekomendasi
                          </span>
                        </div>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
