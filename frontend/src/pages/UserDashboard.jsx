import React, { useState } from "react";
import Layout from "../components/Layout";
import BusCard from "../components/BusCard";
import MapView from "../components/MapView";

/* ================= DEMO BUS DATA (12 BUSES) ================= */

const demoBuses = [
  { _id: 1, busNumber: "RJ14-AC-101", type: "AC", driverName: "Ramesh Kumar", mobile: "9876543210", from: "Jaipur", to: "Delhi", time: "5 Hours", latitude: 28.6139, longitude: 77.2090 },
  { _id: 2, busNumber: "RJ14-NA-202", type: "Non-AC", driverName: "Suresh Yadav", mobile: "9123456789", from: "Jaipur", to: "Delhi", time: "6 Hours", latitude: 28.7041, longitude: 77.1025 },
  { _id: 3, busNumber: "DL01-AC-303", type: "AC", driverName: "Amit Sharma", mobile: "9988776655", from: "Delhi", to: "Agra", time: "4 Hours", latitude: 27.1767, longitude: 78.0081 },
  { _id: 4, busNumber: "UP32-NA-404", type: "Non-AC", driverName: "Vikas Singh", mobile: "9090909090", from: "Lucknow", to: "Kanpur", time: "2 Hours", latitude: 26.4499, longitude: 80.3319 },
  { _id: 5, busNumber: "MP09-AC-505", type: "AC", driverName: "Rahul Verma", mobile: "8888888888", from: "Bhopal", to: "Indore", time: "3 Hours", latitude: 22.7196, longitude: 75.8577 },
  { _id: 6, busNumber: "RJ14-AC-606", type: "AC", driverName: "Anil Meena", mobile: "7777777777", from: "Jaipur", to: "Ajmer", time: "2.5 Hours", latitude: 26.4499, longitude: 74.6399 },
  { _id: 7, busNumber: "MH12-AC-707", type: "AC", driverName: "Prakash Patil", mobile: "9999999999", from: "Pune", to: "Mumbai", time: "4 Hours", latitude: 19.076, longitude: 72.8777 },
  { _id: 8, busNumber: "MH01-NA-808", type: "Non-AC", driverName: "Sanjay Shinde", mobile: "9898989898", from: "Mumbai", to: "Nashik", time: "5 Hours", latitude: 19.9975, longitude: 73.7898 },
  { _id: 9, busNumber: "KA01-AC-909", type: "AC", driverName: "Arjun Rao", mobile: "9797979797", from: "Bangalore", to: "Mysore", time: "3 Hours", latitude: 12.2958, longitude: 76.6394 },
  { _id: 10, busNumber: "TN09-NA-111", type: "Non-AC", driverName: "Karthik M", mobile: "9696969696", from: "Chennai", to: "Vellore", time: "2.5 Hours", latitude: 12.9165, longitude: 79.1325 },
  { _id: 11, busNumber: "GJ01-AC-222", type: "AC", driverName: "Hardik Patel", mobile: "9595959595", from: "Ahmedabad", to: "Surat", time: "4 Hours", latitude: 21.1702, longitude: 72.8311 },
  { _id: 12, busNumber: "PB10-NA-333", type: "Non-AC", driverName: "Gurpreet Singh", mobile: "9494949494", from: "Chandigarh", to: "Amritsar", time: "5 Hours", latitude: 31.634, longitude: 74.8723 }
];

/* ================= COMPONENT ================= */

export default function UserDashboard() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [buses, setBuses] = useState(demoBuses);
  const [selectedBus, setSelectedBus] = useState(null);
  const [msg, setMsg] = useState("");

  const searchBus = () => {
    const filtered = demoBuses.filter(
      bus =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );

    if (filtered.length === 0) {
      setMsg("❌ Bus not available on this particular route");
      setBuses([]);
      setSelectedBus(null);
    } else {
      setMsg("");
      setBuses(filtered);
      setSelectedBus(filtered[0]);
    }
  };

  return (
    <Layout>
      <div style={container}>
        <h2>User Dashboard 🚍</h2>
        <p style={{ color: "#555" }}>Search, view & book buses easily</p>

        {/* SEARCH BOX */}
        <div style={searchBox}>
          <input
            style={input}
            placeholder="From (Jaipur)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            style={input}
            placeholder="To (Delhi)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <button style={button} onClick={searchBus}>
            🔍 Search
          </button>
        </div>

        {msg && <p style={error}>{msg}</p>}

        {/* BUS CARDS */}
        <div style={grid}>
          {buses.map(bus => (
            <BusCard
              key={bus._id}
              bus={bus}
              onSelect={() => setSelectedBus(bus)}
            />
          ))}
        </div>

        {/* MAP */}
        {selectedBus && (
          <div style={mapBox}>
            <h3>Live Bus Location 🗺</h3>
            <MapView
              lat={selectedBus.latitude}
              lng={selectedBus.longitude}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

/* ================= STYLES ================= */

const container = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "30px 20px"
};

const searchBox = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  margin: "25px 0"
};

const input = {
  flex: "1",
  minWidth: "200px",
  padding: "12px",
  fontSize: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  padding: "12px 22px",
  background: "#003366",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px"
};

/* ✅ RESPONSIVE GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px"
};

const mapBox = {
  marginTop: "35px",
  padding: "20px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)"
};

const error = {
  color: "red",
  marginTop: "10px"
};
