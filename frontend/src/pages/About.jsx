import Layout from "../components/Layout";

export default function About() {
  const sections = [
    {
      title: "Project Overview",
      desc: "E-Bus Current Location Predictor is a smart public transport solution built using MERN stack to track buses in real-time and improve passenger experience."
    },
    {
      title: "User Roles",
      desc: "The system supports Admin, Driver, and User roles. Admin manages buses & routes, Drivers update live location, and Users track buses efficiently."
    },
    {
      title: "Technology Stack",
      desc: "Frontend: React + Vite | Backend: Node.js & Express | Database: MongoDB | Maps: Google Maps API"
    },
    {
      title: "Real-Time Tracking",
      desc: "GPS-based tracking allows passengers to view live bus locations and estimated arrival times directly on interactive maps."
    },
    {
      title: "Route & Schedule Management",
      desc: "Admins can manage bus routes, schedules, and drivers to ensure smooth transport operations."
    },
    {
      title: "Future Enhancements",
      desc: "AI-based arrival prediction, traffic analysis, passenger alerts, and mobile application integration."
    }
  ];

  return (
    <Layout>
      {/* HEADER */}
      <section
        style={{
          padding: "70px 20px",
          background: "linear-gradient(135deg, #003366, #0055aa)",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          About E-Bus Management System
        </h1>
        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "17px" }}>
          A smart, scalable and real-time solution for modern public
          transportation management.
        </p>
      </section>

      {/* CONTENT */}
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
          This project addresses real-world transportation problems such as
          unpredictable arrival times, lack of live tracking, and inefficient
          route management by providing a centralized intelligent platform.
        </p>
      </section>
    </Layout>
  );
}
