export default function Footer() {
  const linkStyle = {
    color: "#ddd",
    textDecoration: "none",
    display: "block",
    margin: "6px 0",
    transition: "all 0.3s ease"
  };

  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #003366, #0055aa)",
        color: "white",
        marginTop: "auto",
        padding: "40px 20px 20px"
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        {/* ABOUT */}
        <div>
          <h3>🚍 E-Bus System</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#ddd" }}>
            Smart public transport management system with real-time bus
            tracking, admin & driver dashboards and live route updates.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>
          {["Home", "About", "Login", "Register"].map((text, i) => (
            <a
              key={i}
              href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.color = "#fff";
                e.target.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ddd";
                e.target.style.transform = "translateX(0)";
              }}
            >
              ➜ {text}
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p style={{ fontSize: "14px", color: "#ddd" }}>
            📍 India <br />
            📧 support@ebussystem.com <br />
            ☎ +91-XXXXXXXXXX
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          borderTop: "1px solid #ffffff33",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "14px",
          color: "#ddd"
        }}
      >
        <p>
          © {new Date().getFullYear()} E-Bus System | Developed by{" "}
          <b>Lakshman Kumar</b> & <b>Jyotiraditya</b>
        </p>
      </div>
    </footer>
  );
}
