import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '24px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Your Name</h1>
        <p style={{ color: '#9ca3af' }}>Cybersecurity Analyst | Pentester | QA Automation Lead</p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>About Me</h2>
        <p style={{ color: '#d1d5db' }}>
          Passionate cybersecurity professional with experience in penetration testing, vulnerability assessment,
          and automation testing. Skilled in identifying and mitigating security risks.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Skills</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Penetration Testing','Network Security','OWASP','Burp Suite','Metasploit','Python','Automation Testing']
            .map(skill => <span key={skill} style={{ backgroundColor: '#1f2937', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.875rem' }}>{skill}</span>)}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{ backgroundColor: '#1f2937', padding: '16px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Penetration Test Report</h3>
            <p style={{ color: '#9ca3af', marginTop: '8px' }}>Full-cycle pentest including recon, exploitation, and reporting.</p>
            <button style={{ marginTop: '16px', backgroundColor: '#2563eb', padding: '8px 16px', borderRadius: '8px', color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>

          <div style={{ backgroundColor: '#1f2937', padding: '16px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Vulnerability Scanner</h3>
            <p style={{ color: '#9ca3af', marginTop: '8px' }}>Custom Python-based scanner for identifying web vulnerabilities.</p>
            <button style={{ marginTop: '16px', backgroundColor: '#2563eb', padding: '8px 16px', borderRadius: '8px', color: '#fff', border: 'none', cursor: 'pointer' }}>View Details</button>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>Contact</h2>
        <p style={{ color: '#d1d5db' }}>Email: your.email@example.com</p>
        <p style={{ color: '#d1d5db' }}>GitHub: github.com/yourusername</p>
      </section>
    </div>
  );
}