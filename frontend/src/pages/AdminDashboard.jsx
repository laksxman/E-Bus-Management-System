import React, { useState } from "react";
import Layout from "../components/Layout";
import API from "../utils/api";

export default function AdminDashboard() {
  const [driver, setDriver] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [bus, setBus] = useState({
    busNumber: "",
    source: "",
    destination: ""
  });

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const createDriver = async () => {
    try {
      setError("");
      setMsg("");
      await API.post("/admin/create-driver", driver);
      setMsg(" Driver created successfully");
      setDriver({ name: "", email: "", password: "" });
    } catch (err) {
      setError(" Failed to create driver");
    }
  };

  const addBus = async () => {
    try {
      setError("");
      setMsg("");
      await API.post("/admin/add-bus", bus);
      setMsg("✅ Bus added successfully");
      setBus({ busNumber: "", source: "", destination: "" });
    } catch (err) {
      setError("❌ Failed to add bus");
    }
  };

  return (
    <Layout>
      <div style={container}>
        <h2 style={title}>Admin Dashboard ⚙️</h2>
        <p style={subtitle}>
          Manage drivers, buses, and routes efficiently
        </p>

        {/* CREATE DRIVER */}
        <div style={card}>
          <h3 style={cardTitle}>Create Driver</h3>

          <input
            style={input}
            placeholder="Driver Name"
            value={driver.name}
            onChange={(e) =>
              setDriver({ ...driver, name: e.target.value })
            }
          />

          <input
            style={input}
            placeholder="Driver Email"
            value={driver.email}
            onChange={(e) =>
              setDriver({ ...driver, email: e.target.value })
            }
          />

          <input
            type="password"
            style={input}
            placeholder="Password"
            value={driver.password}
            onChange={(e) =>
              setDriver({ ...driver, password: e.target.value })
            }
          />

          <button style={button} onClick={createDriver}>
            Create Driver
          </button>
        </div>

        {/* ADD BUS */}
        <div style={card}>
          <h3 style={cardTitle}>Add Bus</h3>

          <input
            style={input}
            placeholder="Bus Number"
            value={bus.busNumber}
            onChange={(e) =>
              setBus({ ...bus, busNumber: e.target.value })
            }
          />

          <input
            style={input}
            placeholder="Source"
            value={bus.source}
            onChange={(e) =>
              setBus({ ...bus, source: e.target.value })
            }
          />

          <input
            style={input}
            placeholder="Destination"
            value={bus.destination}
            onChange={(e) =>
              setBus({ ...bus, destination: e.target.value })
            }
          />

          <button style={button} onClick={addBus}>
            Add Bus
          </button>
        </div>

        {/* MESSAGE */}
        {msg && <p style={success}>{msg}</p>}
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </Layout>
  );
}

/* ================= STYLES ================= */

const container = {
  maxWidth: "1000px",
  margin: "auto",
  padding: "40px 20px"
};

const title = {
  marginBottom: "5px"
};

const subtitle = {
  color: "#555",
  marginBottom: "25px",
  fontSize: "15px"
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  marginBottom: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const cardTitle = {
  marginBottom: "10px"
};

const input = {
  padding: "12px",
  fontSize: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  padding: "12px",
  background: "#003366",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px",
  transition: "background 0.3s ease"
};

const success = {
  color: "green",
  fontWeight: "bold",
  marginTop: "10px"
};

const errorStyle = {
  color: "red",
  fontWeight: "bold",
  marginTop: "10px"
};
