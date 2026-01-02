import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // 👈 NEW
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await axios.post(
        "https://e-bus-management-system-ey48.onrender.com/api/auth/login",
        { email, password }
      );

      //  Save auth
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      //  Role mismatch protection
      if (res.data.role !== role) {
        setMsg(`You are not authorized as ${role}`);
        return;
      }

      //  Role-based redirect
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "driver") {
        navigate("/driver-dashboard");
      } else {
        navigate("/user-dashboard");
      }

    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed. Try again.");
    }
  };

  return (
    <Layout>
      <div style={outerWrapper}>
        <div style={cardWrapper}>
          
          {/* LEFT PANEL */}
          <div style={leftPanel}>
            <h2>Welcome Back 🚍</h2>
            <p>
              Login to access real-time bus tracking, driver updates,
              and route management.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div style={rightPanel}>
            <h2 style={{ marginBottom: "25px" }}>Login</h2>

            {msg && <p style={{ color: "red" }}>{msg}</p>}

            <form onSubmit={handleLogin} style={formStyle}>

              {/* ROLE SELECT */}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={inputStyle}
              >
                <option value="user">Login as User</option>
                <option value="admin">Login as Admin</option>
                <option value="driver">Login as Driver</option>
              </select>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />

              <button type="submit" style={buttonStyle}>
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

/* ================= STYLES ================= */

const outerWrapper = {
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px"
};

const cardWrapper = {
  width: "100%",
  maxWidth: "900px",
  display: "flex",
  flexWrap: "wrap",
  borderRadius: "14px",
  overflow: "hidden",
  background: "white",
  boxShadow: "0 12px 35px rgba(0,0,0,0.15)"
};

const leftPanel = {
  flex: "1",
  minWidth: "280px",
  background: "linear-gradient(135deg, #003366, #0055aa)",
  color: "white",
  padding: "50px 40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const rightPanel = {
  flex: "1",
  minWidth: "280px",
  padding: "50px 40px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px"
};

const inputStyle = {
  padding: "13px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "13px",
  backgroundColor: "#004aad",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "0.3s"
};
