import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease"
  };

  return (
    <nav style={{
      padding: "15px 30px",
      background: "linear-gradient(90deg, #003366, #0055aa)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>

      {/* LOGO */}
      <h2 style={{
        margin: 0,
        cursor: "pointer",
        transition: "transform 0.3s ease"
      }}
      onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        🚍 E-Bus System
      </h2>

      {/* HAMBURGER */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          fontSize: "26px",
          cursor: "pointer"
        }}
        className="menu-btn"
      >
        ☰
      </div>

      {/* LINKS */}
      <div style={{
        display: open ? "flex" : "flex",
        gap: "15px",
        alignItems: "center",
        flexWrap: "wrap"
      }}
        className="nav-links"
      >
        {["/", "/about", "/login", "/register"].map((path, i) => (
          <a
            key={i}
            href={path}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "#ffffff22";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </a>
        ))}
      </div>

      {/* RESPONSIVE STYLE */}
      <style>
        {`
          @media (max-width: 768px) {
            .menu-btn {
              display: block !important;
            }
            .nav-links {
              width: 100%;
              margin-top: 15px;
              flex-direction: column;
              display: ${open ? "flex" : "none"} !important;
            }
          }
        `}
      </style>
    </nav>
  );
}
