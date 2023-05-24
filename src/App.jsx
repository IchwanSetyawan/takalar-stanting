import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Layout />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
