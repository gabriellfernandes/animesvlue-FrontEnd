import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/resetStyle";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./config/scrollTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>
);

reportWebVitals();
