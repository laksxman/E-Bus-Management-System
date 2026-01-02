import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DriverDashboard from "./pages/DriverDashboard";

function App() {
  const role = localStorage.getItem("role");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/user-dashboard"
        element={role === "user" ? <UserDashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/admin-dashboard"
        element={role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/driver-dashboard"
        element={role === "driver" ? <DriverDashboard /> : <Navigate to="/login" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
