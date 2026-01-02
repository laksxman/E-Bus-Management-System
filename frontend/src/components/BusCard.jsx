import React, { useState } from "react";

export default function BusCard({ bus, onSelect }) {
  const [booked, setBooked] = useState(false);

  return (
    <div style={card} onClick={onSelect}>
      {/* BUS HEADER */}
      <div style={header}>
        <h3 style={busNo}>{bus.busNumber}</h3>
        <span
          style={{
            ...badge,
            background: bus.type === "AC" ? "#2ecc71" : "#f39c12"
          }}
        >
          {bus.type}
        </span>
      </div>

      {/* BUS INFO */}
      <div style={info}>
        <p><b>👨‍✈️ Driver:</b> {bus.driverName}</p>
        <p><b>📞 Mobile:</b> {bus.mobile}</p>
        <p><b>🛣 Route:</b> {bus.from} ➝ {bus.to}</p>
        <p><b>⏱ Time:</b> {bus.time}</p>
      </div>

      {/* ACTION */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setBooked(true);
        }}
        style={{
          ...button,
          background: booked ? "#27ae60" : "#003366"
        }}
        disabled={booked}
      >
        {booked ? "✅ Booked" : "🚍 Book Now"}
      </button>
    </div>
  );
}

/* ================= STYLES ================= */

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px"
};

const busNo = {
  margin: 0,
  color: "#003366",
  fontSize: "18px"
};

const badge = {
  padding: "5px 12px",
  borderRadius: "20px",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "bold"
};

const info = {
  fontSize: "14px",
  color: "#333",
  lineHeight: "1.6",
  marginBottom: "12px"
};

const button = {
  width: "100%",
  padding: "12px",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s ease"
};
