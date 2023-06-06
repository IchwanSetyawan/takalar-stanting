import { createContext, useState } from "react";
import Login from "../pages/login/Login";
import axios from "axios";
import { Redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const getLogin = localStorage.getItem("isLogin");
  const [roles, setRoles] = useState(null);

  const getToken = () => {
    const generateToken = localStorage.getItem("token");
    setToken(generateToken);
    setIsLogin(true);
  };

  const setTokenFunc = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isLogin", true);
    setIsLogin(true);
  };

  useEffect(() => {
    getToken();
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
        console.log(response.data);
        setIsLogin(true);
        setRoles(response.data.roles);
        localStorage.setItem("roles", response.data.roles);
        setTokenFunc(response.data.access);
        setUsername(response.data.first_name);
        console.log("login sukses");
        navigate("/dashboard");
      })
      .catch((err) => {
        setIsLogin(false);
        alert("Username atau Password Salah");
        console.log(err);
      });
  };

  return (
    <authContext.Provider
      value={{
        isLogin,
        setIsLogin,
        getLogin,
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
      {getLogin ? children : <Login />}
    </authContext.Provider>
  );
};
