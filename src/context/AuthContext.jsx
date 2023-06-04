import { createContext, useState } from "react";
import Login from "../pages/login/Login";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const getLogin = localStorage.getItem("islogin");

  const getToken = () => {
    const generateToken = localStorage.getItem("token");
    setToken(generateToken);
    setIsLogin(true);
  };

  const setTokenFunc = (token) => {
    localStorage.setItem("token", token);
    // setToken(token);
    localStorage.setItem("islogin", true);
    setIsLogin(true);
  };

  //   useEffect(()=>{
  //     getToken()
  //   },[])

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
      }}
    >
      {/* {getLogin ? children : <Login />} */}
      {children}
    </authContext.Provider>
  );
};
