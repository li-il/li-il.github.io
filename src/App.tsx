// @ts-ignore TS6133
import React from "react";
import "./index.css";

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Your Name</h1>
        <p style={{ color: "#9ca3af" }}>Cybersecurity Analyst | QA | Pentester</p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>About Me</h2>
        <p style={{ color: "#d1d5db" }}>
          Passionate cybersecurity professional with experience in pentesting, vulnerability assessments, and automation testing.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["PenTesting", "Network Security", "OWASP", "Burp Suite", "Python", "Automation Testing"].map((skill) => (
            <span
              key={skill}
              style={{
                backgroundColor: "#1f2937",
                padding: "0.3rem 0.8rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          <div style={{ backgroundColor: "#1f2937", padding: "1rem", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Pentest Report</h3>
            <p style={{ color: "#9ca3af", marginTop: "0.5rem" }}>
              Full-cycle penetration test including recon, exploitation, and reporting.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Contact</h2>
        <p style={{ color: "#d1d5db" }}>Email: your.email@example.com</p>
        <p style={{ color: "#d1d5db" }}>GitHub: <a href="https://github.com/xx-xx" target="_blank" style={{ color: "#2563eb" }}>github.com/xx-xx</a></p>
      </section>
    </div>
  );
}