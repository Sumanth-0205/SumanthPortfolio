// src/pages/Home.jsx
import './Home.css';

function Home() {

  return (
  <section className="home">
  <div className="intro">
    <img src="/alapati.jpg" alt="Alapati Sumanth" className="profile-pic" />
     <h1>Hi, I'm Sumanth 👋</h1>
    <p>A passionate React.js developer with hands-on experience in Firebase, backend workflows, and crafting clean user experiences.</p>
    <p><strong>Experience:</strong> 3 years as a Software Engineer at Infosys.</p>
  </div>
 <div className="social-links">
  <a href="https://github.com/Sumanth-0205" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="https://www.linkedin.com/in/alapati-sumanth-67703b285/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</div>


</section>

  );
}

export default Home;
