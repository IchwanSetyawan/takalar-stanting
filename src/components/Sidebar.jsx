import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/image/logo.png";
import { TabMenuContext } from "../context/TabMenuContext";
import { Link, useLocation, useParams } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);
  useEffect(() => {
    if (location.pathname === "/") {
      setTabMenu(1);
    } else {
      setTabMenu(2);
    }
  }, []);
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  bg-white shadow-lg flex flex-col justify-between  ">
          <div>
            <div className="w-32 ">
              <img src={Logo} alt="logo" />
            </div>
            <div className="mt-9">
              <ul className="font-medium flex flex-col  gap-2 text-sm">
                <li>
                  <Link
                    to="/"
                    onClick={() => setTabMenu(1)}
                    className={`${
                      tabMenu === 1
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary"
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6]"
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

                      <span className="ml-3 text-xl font-medium">
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
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary  "
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6] "
                    }`}
                  >
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ml-3 text-xl font-medium">
                        Dahsboard Balita
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
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary  "
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6] "
                    }`}
                  >
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ml-3 text-xl font-medium">Sebaran</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cakupan"
                    onClick={() => setTabMenu(4)}
                    className={`${
                      tabMenu === 4
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary  "
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6] "
                    }`}
                  >
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ml-3 text-xl font-medium">Cakupan</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recommendation"
                    onClick={() => setTabMenu(5)}
                    className={`${
                      tabMenu === 5
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary  "
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6] "
                    }`}
                  >
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ml-3 text-xl font-medium">
                        Rekomendasi
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
                        ? "flex items-center p-3 text-white rounded-lg  bg-primary  "
                        : "flex items-center p-3 text-darkHard rounded-lg   hover:bg-[#F7F7F6] "
                    }`}
                  >
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="ml-3 text-xl font-medium">Wilayah</span>
                    </div>
                  </Link>
                </li>
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
