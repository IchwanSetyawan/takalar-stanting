import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Location from "./pages/location/Location";
import LocationDetail from "./pages/location/details/LocationDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/location" exact element={<Location />} />
        <Route path="/location/:id" exact element={<LocationDetail />} />
      </Routes>
    </>
  );
}

export default App;
