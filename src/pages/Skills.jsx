// src/pages/Skills.jsx
import './Skills.css';

function Skills() {
  const skillset = [
    { name: 'React', icon: '⚛️' },
    { name: 'Firebase (Auth & Firestore)', icon: '🔥' },
    { name: 'MongoDB Atlas', icon: '🍃' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'Nodemailer', icon: '📬' },
    { name: 'Deployment: Render & Netlify', icon: '🚀' }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="grid">
        {skillset.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="learning">
        <h3>Currently Exploring</h3>
        <ul>
          <li>Responsive UI & Dark Mode in React</li>
          <li>CSV Export Functionality</li>
          <li>Real-time Data Sync</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
