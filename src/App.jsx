import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/details/LocationDetail";
import Cakupan from "./pages/Cakupan/Cakupan";
import DashboardBalita from "./pages/dashboard-balita/DashboardBalita";
import Recommendation from "./pages/rekomendasi/Recommendation";
import Sebaran from "./pages/sebaran/Sebaran";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/cakupan" exact element={<Cakupan />} />
        <Route path="/dashboard-balita" exact element={<DashboardBalita />} />
        <Route path="/recommendation" exact element={<Recommendation />} />
        <Route path="/sebaran" exact element={<Sebaran />} />
        <Route path="/location" exact element={<Location />} />
        <Route path="/location/:id" exact element={<LocationDetail />} />
        <Route path="/location/:id/cakupan/:id" exact element={<Cakupan />} />
      </Routes>
    </>
  );
}

export default App;
