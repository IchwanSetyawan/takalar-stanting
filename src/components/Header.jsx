import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TabMenuContext } from "../context/TabMenuContext";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlerShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  return (
    <>
      <div className="sm:ml-48 sticky top-0 z-50">
        <div className="relative">
          <div className="p-4 bg-[#2EA9DD]  justify-between flex items-center shadow-md">
            <Link to="/" onClick={() => setTabMenu(1)}>
              <h1 className="text-white text-xl font-semibold">Dashboard</h1>
            </Link>
            <div className="text-white flex justify-center gap-2 cursor-pointer hover:text-gray-100">
              <span className="text-[#252A35]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <button onClick={handlerShowDropdown}>
                <div className="flex gap-2">
                  <span className=" text-sm">Hello, Jhony</span>
                  {showDropdown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
          {showDropdown && (
            <div className="absolute  right-4 top-14 flex items-center cursor-pointer ">
              <div className="bg-white rounded-md shadow-md w-36  flex j">
                <ul className="w-full">
                  <li className="hover:bg-slate-100 hover:rounded-md py-2 px-2 text-sm justify-end flex gap-2">
                    <button>
                      <Link to="/login">Logout</Link>
                    </button>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5"
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};
