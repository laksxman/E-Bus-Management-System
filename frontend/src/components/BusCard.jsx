import React, { useState, useEffect } from "react";

export default function BusCard({
  bus,
  booked: bookedProp = false,
  selected = false,          // 🎯 NEW
  onBook,
  onSelect                  // 🧭 NEW
}) {
  const [booked, setBooked] = useState(bookedProp);

  /* ===== SYNC WITH PARENT BOOKED STATE ===== */
  useEffect(() => {
    setBooked(bookedProp);
  }, [bookedProp]);

  const handleBook = (e) => {
    e.stopPropagation();

    if (!booked) {
      setBooked(true);
      if (onBook) onBook(bus); // parent notify
    }
  };

  const handleSelect = () => {
    if (onSelect) onSelect(bus); // 🎯 parent ko selected bus
  };

  return (
    <div
      style={{
        ...card,
        border: selected ? "2px solid #2ecc71" : "2px solid transparent",
        transform: selected ? "scale(1.03)" : "scale(1)"
      }}
      onClick={handleSelect}
    >
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
        onClick={handleBook}
        style={{
          ...button,
          background: booked ? "#27ae60" : "#003366",
          cursor: booked ? "not-allowed" : "pointer"
        }}
        disabled={booked}
      >
        {booked ? "✅ Booked" : "🚍 Book Now"}
      </button>
    </div>
  );
}

/* ================= STYLES (UNCHANGED) ================= */

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease"
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
  transition: "background 0.3s ease"
};
