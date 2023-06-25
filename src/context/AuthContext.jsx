import React, { createContext, useState } from "react";
import Login from "../pages/login/Login";
import axios from "axios";
import { Navigate, Redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Beranda from "../pages/LandingPage/Beranda";
import { toast } from "react-hot-toast";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [roles, setRoles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getToken = () => {
    const generateToken = localStorage.getItem("token");
    setToken(generateToken);
    // setIsLogin(true);
  };

  const isAuthenticated = localStorage.getItem("token");

  const setTokenFunc = (token) => {
    localStorage.setItem("token", token);
    // setIsLogin(true);
  };

  useEffect(() => {
    getToken();
    // if (isAuthenticated) {
    //   navigate("/dashboard");
    // }

    const timeout = setTimeout(() => {
      setIsLogin(false);
      localStorage.removeItem("token");
      localStorage.removeItem("1");
      localStorage.removeItem("roles");
      navigate("/login");
    }, 60 * 60 * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLogin]);

  // LOGIN
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

  const requestBody = {
    username: formData.username,
    password: formData.password,
  };

  const handleLogin = () => {
    const URL = "https://stunting.ahadnikah.com/api/auth/login";
    axios
      .post(URL, requestBody)
      .then((response) => {
        setIsLogin(true);
        setRoles(response.data.roles);
        setTokenFunc(response.data.access);
        localStorage.setItem("1", response?.data?.first_name);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
        toast.success("Berhasil login!");
        console.log(isLogin);
        setIsLoading(true);
        localStorage.setItem("kc", response.data.kecamatan);
        localStorage.setItem("kl", response.data.kelurahan_desa);
      })
      .catch((err) => {
        toast.error("Username atau password salah!");
        setIsLogin(false);
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    username;
  }, []);

  return (
    <authContext.Provider
      value={{
        isLogin,
        setIsLogin,
        // getLogin,
        username,
        setUsername,
        setToken,
        setTokenFunc,
        token,
        getToken,
        handleLogin,
        handleFormLogin,
        formData,

        roles,
        setRoles,

        isLoading,
        setIsLoading,
        isAuthenticated,
      }}
    >
      {/* {isAuthenticated ? children : <Login />} */}
      {children}
    </authContext.Provider>
  );
};
