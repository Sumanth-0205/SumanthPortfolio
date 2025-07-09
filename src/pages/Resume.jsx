


import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <iframe
        src="/Sumanthresume.pdf"
        title="Resume PDF"
        className="resume-frame"
      ></iframe>
      <a href="/Sumanthresume.pdf" download>
        <button className="download-btn">⬇️ Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
