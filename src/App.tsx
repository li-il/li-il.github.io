import React from "react";
import "./index.css";

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Your Name
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Cybersecurity Analyst | Penetration Tester | QA Automation Lead
        </p>
      </header>

      {/* About Me */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>
          About Me
        </h2>
        <p style={{ color: "#d1d5db" }}>
          Passionate cybersecurity professional with experience in penetration testing, vulnerability assessment,
          and automation testing. Skilled in identifying and mitigating security risks.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Penetration Testing", "Network Security", "OWASP", "Burp Suite", "Metasploit", "Python", "Automation Testing"].map((skill) => (
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

      {/* Projects */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          <div style={{ backgroundColor: "#1f2937", padding: "1rem", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Penetration Test Report</h3>
            <p style={{ color: "#9ca3af", marginTop: "0.5rem" }}>
              Full-cycle pentest including reconnaissance, exploitation, and reporting.
            </p>
            <button style={{ marginTop: "0.75rem", backgroundColor: "#2563eb", padding: "0.5rem 1rem", borderRadius: "8px", color: "#fff", border: "none", cursor: "pointer" }}>
              View Details
            </button>
          </div>

          <div style={{ backgroundColor: "#1f2937", padding: "1rem", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Vulnerability Scanner</h3>
            <p style={{ color: "#9ca3af", marginTop: "0.5rem" }}>
              Python-based scanner for web vulnerabilities.
            </p>
            <button style={{ marginTop: "0.75rem", backgroundColor: "#2563eb", padding: "0.5rem 1rem", borderRadius: "8px", color: "#fff", border: "none", cursor: "pointer" }}>
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>Contact</h2>
        <p style={{ color: "#d1d5db" }}>Email: your.email@example.com</p>
        <p style={{ color: "#d1d5db" }}>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>github.com/yourusername</a></p>
      </section>
    </div>
  );
}