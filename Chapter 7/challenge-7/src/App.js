import Dashboard from "./pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import RouterDefault from "./routerDefault/RouterDefault";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterDefault />
      </BrowserRouter>
    </div>
  );
}

export default App;
