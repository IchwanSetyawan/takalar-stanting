import { useState } from "react";
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

function App() {
  // const { isLogin, setIsLogin } = useContext(authContext);
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <TabMenuContextProvider>
            <KecamatanContextProvider>
              <KelurahanContextProvider>
                <CakupanContextProvider>
                  <SummaryContextProvider>
                    <SebaranContextProvider>
                      <BapakAsuhContextProvider>
                        <Routes>
                          <Route exact path="/" element={<Beranda />} />

                          <Route path="/login" exact element={<Login />} />
                          <Route path="/dashboard" element={<Dashboard />} />

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
                          <Route path="*" element={<Notfound />} />
                        </Routes>
                      </BapakAsuhContextProvider>
                    </SebaranContextProvider>
                  </SummaryContextProvider>
                </CakupanContextProvider>
              </KelurahanContextProvider>
            </KecamatanContextProvider>
          </TabMenuContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
