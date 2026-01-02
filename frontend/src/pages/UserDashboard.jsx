import React, { useState, useEffect } from "react";
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
  const [buses, setBuses] = useState([]);
  const [bookedBusId, setBookedBusId] = useState(null);

  // 🔹 NEW STATES
  const [selectedBus, setSelectedBus] = useState(null);

  const [msg, setMsg] = useState("");

  /* ===== INITIAL LOAD ===== */
  useEffect(() => {
    setBuses(demoBuses);
  }, []);

  /* ===== 🔄 LIVE MOVING BUSES ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prev =>
        prev.map(bus => ({
          ...bus,
          latitude: bus.latitude + (Math.random() - 0.5) * 0.01,
          longitude: bus.longitude + (Math.random() - 0.5) * 0.01
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const searchBus = () => {
    if (!from || !to) return;

    const filtered = demoBuses.filter(
      b =>
        b.from.toLowerCase() === from.toLowerCase() &&
        b.to.toLowerCase() === to.toLowerCase()
    );

    setBuses(filtered);
    setMsg(filtered.length ? "" : "❌ Bus not available on this route");
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <h2>User Dashboard 🚍</h2>
        <p className="subtitle">Search • Track • Book buses</p>

        {/* SEARCH */}
        <div className="search-box">
          <input placeholder="From" value={from} onChange={e => setFrom(e.target.value)} />
          <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />
          <button onClick={searchBus}>🔍 Search</button>
        </div>

        {msg && <p className="error">{msg}</p>}

        {/* BUS GRID */}
        <div className="bus-grid">
          {buses.map(bus => (
            <BusCard
              key={bus._id}
              bus={bus}
              booked={bookedBusId === bus._id}
              selected={selectedBus?._id === bus._id}   // 🎯 highlight
              onBook={() => setBookedBusId(bus._id)}
              onSelect={() => setSelectedBus(bus)}      // 🧭 select bus
            />
          ))}
        </div>

        {/* MAP */}
        {buses.length > 0 && (
          <div className="map-card">
            <h3>Live Bus Locations 🗺</h3>
            <MapView
              buses={buses}
              selectedBus={selectedBus}   // 🧭 zoom target
            />
          </div>
        )}
      </div>

      {/* ======== STYLES (UNCHANGED) ======== */}
      <style>{`
        .dashboard-container {
          max-width: 1200px;
          margin: auto;
          padding: 30px 20px;
        }

        .subtitle {
          color: #555;
          margin-bottom: 15px;
        }

        .search-box {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          background: #fff;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          margin: 25px 0;
        }

        .search-box input {
          flex: 1;
          min-width: 180px;
          padding: 12px;
          font-size: 15px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .search-box button {
          padding: 12px 24px;
          background: #003366;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
        }

        .bus-grid {
          display: grid;
          gap: 20px;
          margin-top: 20px;
        }

        @media (min-width: 1024px) {
          .bus-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 600px) and (max-width: 1023px) {
          .bus-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 599px) {
          .bus-grid { grid-template-columns: 1fr; }
        }

        .map-card {
          margin-top: 40px;
          padding: 22px;
          background: linear-gradient(135deg, #ffffff, #f4f8ff);
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </Layout>
  );
}
