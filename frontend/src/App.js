import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <body>
        <Header />
        <Routes />
      </body>
    </BrowserRouter>
  );
}
