import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/details/LocationDetail";
import Cakupan from "./pages/Cakupan/Cakupan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/location" exact element={<Location />} />
        <Route path="/location/:id" exact element={<LocationDetail />} />
        <Route path="/location/cakupan" exact element={<Cakupan />} />
      </Routes>
    </>
  );
}

export default App;
