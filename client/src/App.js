import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Automation from "./pages/Automation";
import Detection from "./pages/Detection";
import Mapping from "./pages/Mapping";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/mapping" element={<Mapping />} />
        <Route path="/detection" element={<Detection />} />
      </Routes>
    </>
  );
}

export default App;
