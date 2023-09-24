import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Detection from "./pages/Detection";
import Mapping from "./pages/Mapping";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
