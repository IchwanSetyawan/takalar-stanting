import React, { useState } from "react";
import Logo from "../../assets/image/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const defaultData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...defaultData });

  const handleFormLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="bg-[#2EA9DD] h-screen flex justify-center items-center">
        <div className="">
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="w-48">
              <img src={Logo} alt="logo" />
            </div>
            <div className="w-full">
              <form className="bg-[#F0F4F4]  px-24 py-14  flex flex-col gap-5 rounded-lg">
                <h1 className="text-[#434D5C] text-md font-semibold">
                  Login ke Dashboard
                </h1>
                <div className="flex flex-col justify-center gap-2">
                  <label className="text-[#434D5C] text-xs ">Email</label>
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleFormLogin}
                    type="text"
                    className="p-3 rounded-md w-full border border-slate-300 text-xs focus:outline-none"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 ">
                  <label className="text-[#434D5C] text-xs ">Password</label>
                  <div class="relative text-gray-600 focus-within:text-gray-400">
                    <input
                      name="password"
                      onChange={handleFormLogin}
                      value={formData.password}
                      type={showPassword ? "text" : "password"}
                      className="p-3 pr-10 rounded-md w-full border border-slate-300 text-xs focus:outline-none"
                    />
                    <button
                      onClick={handleShowPassword}
                      class="absolute right-4 top-3 flex items-center cursor-pointer  "
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fill-rule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-4 h-4"
                        >
                          <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#2EA9DD] text-white rounded-md text-xs px-6 py-2 hover:bg-[#5B8DAC]">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
