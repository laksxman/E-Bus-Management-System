import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://e-bus-management-system-ey48.onrender.com/api/auth/register", {
        name,
        email,
        password
      });
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <Layout>
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            borderRadius: "12px",
            overflow: "hidden",
            background: "white"
          }}
        >
          {/* LEFT INFO */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              background: "linear-gradient(135deg, #004aad, #0066cc)",
              color: "white",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Join E-Bus System 🚍</h2>
            <p style={{ lineHeight: "1.6", fontSize: "15px" }}>
              Create an account to track buses in real-time, get driver updates,
              and plan your journey efficiently.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              padding: "40px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Register</h2>

            {msg && (
              <p style={{ color: "red", marginBottom: "15px" }}>
                {msg}
              </p>
            )}

            <form
              onSubmit={handleRegister}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "12px",
                  backgroundColor: "#004aad",
                  color: "white",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, background 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
