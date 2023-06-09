import React, { useState } from "react";
import "./App.css";
import {
  Route,
  Router,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
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
import { AuthContextProvider, authContext } from "./context/AuthContext";
// import PrivateRoute from "./components/PrivateRoute";
import { Fragment } from "react";
import DashboardBapakAsuh from "./pages/dashboard-bapakasuh/DashboardBapakAsuh";
import Beranda from "./pages/LandingPage/Beranda";
import TabMenuContextProvider from "./context/TabMenuContext";
import { KecamatanContextProvider } from "./context/KecamatanContext";
import { KelurahanContextProvider } from "./context/KelurahanContext";
import { CakupanContextProvider } from "./context/CakupanContext";
import { SebaranContextProvider } from "./context/SebaranContext";
import { BapakAsuhContextProvider } from "./context/BapakAsuhContext";
import { SummaryContextProvider } from "./context/SummaryContext";
import PrivateRoute from "./components/PrivateRoute";
import RegisterBapakAsuh from "./pages/LandingPage/RegisterBapakAsuh";
import { RekomendasiContextProvider } from "./context/RekomendasiContext";
import TentangKami from "./pages/LandingPage/TentangKami";
import NewsPage from "./pages/LandingPage/NewsPage";
import NewsPageDetail from "./pages/LandingPage/NewsPageDetail";
import DashboardNews from "./pages/dashboard-news/DashboardNews";
import NewsAdd from "./pages/dashboard-news/NewsAdd.jsx";
import EditNews from "./pages/dashboard-news/EditNews";
import FormAnakStunting from "./pages/FormAnakStunting/FormAnakStunting";
import { SidebarContextProvider } from "./context/SidebarContext";

function App() {
  // const { isLogin, setIsLogin } = useContext(authContext);
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <SidebarContextProvider>
            <TabMenuContextProvider>
              <KecamatanContextProvider>
                <KelurahanContextProvider>
                  <CakupanContextProvider>
                    <SummaryContextProvider>
                      <SebaranContextProvider>
                        <BapakAsuhContextProvider>
                          <RekomendasiContextProvider>
                            <Routes>
                              <Route path="/login" exact element={<Login />} />
                              <Route
                                path="/dashboard"
                                element={<Dashboard />}
                              />
                              <Route path="/news" element={<NewsPage />} />
                              <Route
                                path="/news/:id"
                                element={<NewsPageDetail />}
                              />

                              <Route path="/cakupan" element={<Cakupan />} />
                              <Route
                                path="/dashboard-balita"
                                element={<DashboardBalita />}
                              />
                              <Route
                                path="/dashboard-bapakasuh"
                                element={<DashboardBapakAsuh />}
                              />
                              <Route
                                path="/register-bapakasuh"
                                element={<RegisterBapakAsuh />}
                              />
                              <Route
                                path="/recommendation"
                                element={<Recommendation />}
                              />
                              <Route path="/sebaran" element={<Sebaran />} />
                              <Route path="/location" element={<Location />} />
                              <Route
                                path="/location/:id"
                                element={<LocationDetail />}
                              />
                              <Route
                                path="/location/:id/cakupan/:id"
                                element={<Cakupan />}
                              />

                              <Route exact path="/" element={<Beranda />} />
                              <Route
                                exact
                                path="/tentang-kami"
                                element={<TentangKami />}
                              />
                              <Route
                                exact
                                path="/dashboard-news"
                                element={<DashboardNews />}
                              />
                              <Route
                                exact
                                path="/dashboard-news/add"
                                element={<NewsAdd />}
                              />
                              <Route
                                exact
                                path="/dashboard-news/edit/:id"
                                element={<EditNews />}
                              />
                              <Route
                                exact
                                path="/dashboard-news/edit/:id"
                                element={<EditNews />}
                              />
                              <Route
                                exact
                                path="/form-anak-stunting"
                                element={<FormAnakStunting />}
                              />
                              <Route path="*" element={<Notfound />} />
                            </Routes>
                          </RekomendasiContextProvider>
                        </BapakAsuhContextProvider>
                      </SebaranContextProvider>
                    </SummaryContextProvider>
                  </CakupanContextProvider>
                </KelurahanContextProvider>
              </KecamatanContextProvider>
            </TabMenuContextProvider>
          </SidebarContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
