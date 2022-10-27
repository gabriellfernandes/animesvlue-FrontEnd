import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { ContextAnimes } from "./contexts/animesContext";
import { RoutesMap } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <ContextAnimes>
      <ToastContainer />
      <RoutesMap />
    </ContextAnimes>
  );
}

export default App;
