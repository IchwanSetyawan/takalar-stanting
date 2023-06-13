import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TabMenuContextProvider from "./context/TabMenuContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SummaryContextProvider } from "./context/SummaryContext.jsx";
import { CakupanContextProvider } from "./context/CakupanContext.jsx";
import { KecamatanContextProvider } from "./context/KecamatanContext.jsx";
import { KelurahanContextProvider } from "./context/KelurahanContext.jsx";
import { SebaranContextProvider } from "./context/SebaranContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <TabMenuContextProvider>
        <KecamatanContextProvider>
          <KelurahanContextProvider>
            <CakupanContextProvider>
              <SummaryContextProvider>
                <SebaranContextProvider>
                  <App />
                </SebaranContextProvider>
              </SummaryContextProvider>
            </CakupanContextProvider>
          </KelurahanContextProvider>
        </KecamatanContextProvider>
      </TabMenuContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
