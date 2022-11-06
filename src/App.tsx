import { ToastContainer } from "react-toastify";
import "./App.css";
import { RoutesMap } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContextComponent } from "./contexts/globalContext";


function App() {
  return (
    <GlobalContextComponent>
      <ToastContainer />
      <RoutesMap />
    </GlobalContextComponent>
  );
}

export default App;
