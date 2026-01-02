import Layout from "../components/Layout";

export default function Home() {
  const features = [
    "Live Bus Tracking",
    "Route-based Search",
    "Real-time Arrival Prediction",
    "Driver Information",
    "Bus Capacity Status",
    "GPS Enabled Maps",
    "Admin Bus Monitoring",
    "Driver Location Updates",
    "Emergency Alerts",
    "Smart Scheduling",
    "Traffic-aware Routing",
    "Passenger Notifications"
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #004aad, #0066cc)",
          color: "white"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          🚌 E-Bus Current Location Mangement System
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Track buses in real-time, reduce waiting time, and manage transport
          efficiently with smart GPS-based solutions.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section
        style={{
          padding: "60px 30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Smart Bus Management Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px"
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: "35px 25px",
                minHeight: "180px",
                background: "white",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.12)";
              }}
            >
              <h3 style={{ marginBottom: "12px", color: "#004aad" }}>
                {feature}
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Efficient and intelligent system designed to improve public
                transport operations and passenger experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "60px 20px",
          background: "#f5f8ff",
          textAlign: "center"
        }}
      >
        <h2>Experience Smart Public Transport</h2>
        <p style={{ maxWidth: "650px", margin: "15px auto", color: "#555" }}>
          Our system integrates GPS, Google Maps, backend APIs, and real-time
          tracking to deliver accurate and reliable bus location predictions.
        </p>
      </section>
    </Layout>
  );
}
