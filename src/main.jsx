import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TabMenuContextProvider from "./context/TabMenuContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SummaryContextProvider } from "./context/SummaryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <TabMenuContextProvider>
        <SummaryContextProvider>
          <App />
        </SummaryContextProvider>
      </TabMenuContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
