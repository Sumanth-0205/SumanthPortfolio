


import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <iframe
        src="/SumanthUpdatedresume.pdf"
        title="Resume PDF"
        className="resume-frame"
      ></iframe>
      <a href="/SumanthUpdatedresume.pdf" download>
        <button className="download-btn">⬇️ Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
