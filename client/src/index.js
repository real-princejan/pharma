import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import "antd/dist/reset.css";

// Router
import { BrowserRouter } from "react-router-dom";

// imports
import { AuthProvider } from "./context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
