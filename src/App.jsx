import { useState } from "react";
import "./App.css";
import { Route, Router, Routes, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/details/LocationDetail";
import Cakupan from "./pages/Cakupan/Cakupan";
import DashboardBalita from "./pages/dashboard-balita/DashboardBalita";
import Recommendation from "./pages/rekomendasi/Recommendation";
import Sebaran from "./pages/sebaran/Sebaran";
import Notfound from "./pages/404notfound/Notfound";
import { useContext } from "react";
import { authContext } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { Fragment } from "react";
import DashboardBapakAsuh from "./pages/dashboard-bapakasuh/DashboardBapakAsuh";

function App() {
  const { isLogin, setIsLogin } = useContext(authContext);
  return (
    <>
      <Fragment>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<Notfound />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/cakupan" element={<Cakupan />} />
          <Route path="/dashboard-balita" element={<DashboardBalita />} />
          <Route path="/dashboard-bapakasuh" element={<DashboardBapakAsuh />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/sebaran" element={<Sebaran />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/location/:id/cakupan/:id" element={<Cakupan />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
