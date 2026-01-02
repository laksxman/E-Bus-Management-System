import Layout from "../components/Layout";

export default function About() {
  const sections = [
    {
      title: "Project Overview",
      desc: "E-Bus Current Location Predictor is a smart MERN-based public transport system designed to track buses in real-time and enhance passenger convenience."
    },
    {
      title: "User Roles",
      desc: "Admin manages buses and routes, Drivers update live GPS locations, and Users track buses with ease."
    },
    {
      title: "Technology Stack",
      desc: "React + Vite, Node.js, Express, MongoDB, and Google Maps API."
    },
    {
      title: "Real-Time Tracking",
      desc: "GPS-enabled tracking helps passengers view live bus locations and estimated arrival times."
    },
    {
      title: "Route & Schedule Management",
      desc: "Admins can efficiently manage routes, schedules, and driver assignments."
    },
    {
      title: "Future Enhancements",
      desc: "AI-based arrival prediction, traffic analytics, passenger alerts, and mobile app integration."
    }
  ];

  const features = [
    "📍 Live Bus Location Tracking",
    "🧑‍💼 Role-Based Access (Admin, Driver, User)",
    "🗺 Interactive Google Maps Integration",
    "⏱ Estimated Arrival Time Display",
    "📊 Centralized Transport Management",
    "🔒 Secure Authentication System"
  ];

  return (
    <Layout>
      {/* HEADER */}
      <section
        style={{
          padding: "70px 20px",
          background: "linear-gradient(135deg, #004aad, #0066cc)",
          color: "white",
          textAlign: "center",
          height: "160px",
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          About E-Bus Management System
        </h1>
        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "17px" }}>
          A smart, scalable, and real-time solution for modern public transportation.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          padding: "60px 30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}
        >
          {sections.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "14px",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 18px rgba(0,0,0,0.12)";
              }}
            >
              <h3 style={{ color: "#004aad", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#555", lineHeight: "1.7" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY FEATURES */}
      {/* KEY FEATURES */}
<section
  style={{
    padding: "60px 20px",
    background: "#f9fbff",
    textAlign: "center"
  }}
>
  <h2 style={{ marginBottom: "30px" }}>Key Features</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "0 auto"
    }}
  >
    {features.map((feature, i) => (
      <div
        key={i}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "14px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 12px 26px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 6px 14px rgba(0,0,0,0.1)";
        }}
      >
        <span style={{ fontSize: "17px", fontWeight: "500" }}>
          {feature}
        </span>
      </div>
    ))}
  </div>
</section>


      {/* FOOTER INFO */}
      <section
        style={{
          padding: "50px 20px",
          background: "#f5f8ff",
          textAlign: "center"
        }}
      >
        <h2>Why This System?</h2>
        <p style={{ maxWidth: "700px", margin: "15px auto", color: "#555" }}>
          This system solves real-world transportation issues like unpredictable
          arrival times, lack of live tracking, and inefficient route management
          by providing a centralized and intelligent platform.
        </p>
      </section>
    </Layout>
  );
}
