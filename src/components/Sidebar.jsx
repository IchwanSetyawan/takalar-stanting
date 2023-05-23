import React from "react";
import Logo from "../assets/image/logo.png";

const Sidebar = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4  bg-white shadow-lg flex flex-col justify-between  ">
          <div className="flex justify-center items-center">
            <div className="w-36 ">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ul className="space-y-2 font-medium flex flex-col justify-center items-center gap-6  ">
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-5 text-[#252A35] rounded-lg  hover:bg-[#5B8DAC] hover:text-[#F2F2F3]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-14 h-14"
                  >
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                  </svg>

                  <span className="ml-3">Ringkasan</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex flex-col items-center p-4 text-[#252A35] rounded-lg  hover:bg-[#5B8DAC] hover:text-[#F2F2F3]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-14 h-14"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="ml-3">Ringkasan</span>
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
