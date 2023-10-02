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
import { SearchProvider } from "./context/Search";
import { CartProvider } from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
