import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TabMenuContext } from "../context/TabMenuContext";
import UserIcon from "../assets/icon/user-icon.svg";
import ArrowButtonIcon from "../assets/icon/arrow-bottom-icon.svg";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlerShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };
  const { tabMenu, setTabMenu } = useContext(TabMenuContext);

  return (
    <>
      <div className="sm:ml-60 sticky top-0 z-50">
        <div className="relative">
          <div className="p-4 bg-primary  justify-between flex items-center shadow-md">
            <Link to="/" onClick={() => setTabMenu(1)}>
              <h1 className="text-white text-xl font-semibold">Dashboard</h1>
            </Link>
            <div className="text-white flex justify-center gap-2 cursor-pointer hover:text-gray-100">
              <div>
                <img src={UserIcon} alt="user icon" />
              </div>
              <button onClick={handlerShowDropdown}>
                <div className="flex gap-2 items-center">
                  <span className=" text-sm">Admin</span>
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
