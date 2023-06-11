import { createContext, useState } from "react";
import Login from "../pages/login/Login";
import axios from "axios";
import { Navigate, Redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  // const getLogin = localStorage.getItem("isLogin", isLogin);
  const [roles, setRoles] = useState(null);

  const getToken = () => {
    const generateToken = localStorage.getItem("token");
    setToken(generateToken);
    // setIsLogin(true);
  };

  const setTokenFunc = (token) => {
    localStorage.setItem("token", token);
    setIsLogin(true);
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/dashboard");
    }

    getToken();

    const timeout = setTimeout(() => {
      setIsLogin(false);
      localStorage.removeItem("token");
      // localStorage.removeItem("isLogin");
      localStorage.removeItem("roles");
      navigate("/login");
    }, 60 * 60 * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
        localStorage.setItem("roles", response.data.roles);
        setTokenFunc(response.data.access);
        setUsername(response?.data?.first_name);
        navigate("/dashboard");
      })
      .catch((err) => {
        setIsLogin(false);
        alert("err");
        console.log(err);
      });
  };

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
      }}
    >
      {isLogin ? children : <Login />}
    </authContext.Provider>
  );
};
