import React, { useState } from "react";
import Layout from "../components/Layout";
import MapView from "../components/MapView";
import API from "../utils/api";

export default function DriverDashboard() {
  const [busId, setBusId] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const updateLocation = async () => {
    try {
      setMsg("");
      setError("");

      await API.post("/driver/update-location", {
        busId,
        latitude: lat,
        longitude: lng
      });

      setMsg(" Location updated successfully");
    } catch (err) {
      setError(" Failed to update location");
    }
  };

  return (
    <Layout>
      <div style={container}>
        <h2 style={title}>Driver Dashboard 🚍</h2>
        <p style={subtitle}>
          Update your bus location in real-time
        </p>

        <div style={card}>
          <h3 style={cardTitle}>Update Live Location</h3>

          <input
            style={input}
            placeholder="Bus ID"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
          />

          <input
            style={input}
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />

          <input
            style={input}
            placeholder="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />

          <button style={button} onClick={updateLocation}>
            Update Location
          </button>

          {msg && <p style={success}>{msg}</p>}
          {error && <p style={errorStyle}>{error}</p>}
        </div>

        {/* MAP PREVIEW */}
        {lat && lng && (
          <div style={mapCard}>
            <h3 style={cardTitle}>Live Location Preview</h3>
            <MapView lat={parseFloat(lat)} lng={parseFloat(lng)} />
          </div>
        )}
      </div>
    </Layout>
  );
}

/* ================= STYLES ================= */

const container = {
  maxWidth: "900px",
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
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const mapCard = {
  marginTop: "30px",
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
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
