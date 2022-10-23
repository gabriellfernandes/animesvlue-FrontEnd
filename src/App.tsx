import React from "react";
import "./App.css";
import { ContextAnimes } from "./contexts/animesContext";
import { RoutesMap } from "./routes/routes";

function App() {
  return (
    <ContextAnimes>
      <RoutesMap />
    </ContextAnimes>
  );
}

export default App;
