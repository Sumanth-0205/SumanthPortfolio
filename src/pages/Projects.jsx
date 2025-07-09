// src/pages/Projects.jsx
import './Projects.css';
import { motion} from "framer-motion";

function Projects() {
  const projects = [
    {
      title: 'Food Ordering App',
      description: `This project lets users search for food items using a search bar, select from multiple categories, and proceed to checkout. Once items are selected, users provide their email and go through Razorpay's test payment gateway. After successful payment, an automated email is sent with the full order summary and bill. This showcases seamless frontend flow, Razorpay integration, and email automation.`,
      tech: ['React', 'Razorpay', 'Email Automation'],
      link: 'https://sumanth2.netlify.app'
    },
    {
      title: 'Data Sharing Dashboard',
      description: `A full-stack user dashboard system with authentication features including signup, login, forgot password, and email verification. Each registered user gets a personal dashboard where they can perform CRUD operations on their data. Users can also send friend requests to other registered users. Once accepted, both users can securely share data with each other. This project demonstrates user isolation, real-time collaboration, and secure data workflows.`,
      tech: ['React', 'Firebase Auth', 'Firestore', 'Friend Request Workflow'],
      link: 'https://datasharing.netlify.app'
    },
    {
      title: 'Mobile Compare App',
      description: `This app allows users to compare mobile phones side-by-side based on key specifications like battery capacity, camera resolution, and RAM. Users can select multiple phones and click "Compare Selected Mobiles" to view a detailed comparison. The app highlights which phone has the highest specs in each category, making it easy to identify the best option. Built with a clean UI and dynamic logic, it’s a great example of interactive data presentation.`,
      tech: ['React', 'Dynamic Comparison Logic', 'Responsive UI'],
      link: 'https://mobilescompare.netlify.app'
    },
    {
      title: 'Movie Booking App',
      description: `A simple and intuitive movie ticket booking system. Users can browse available movies, select showtimes, and book tickets. After booking, the app stores the user's booking history, which can be viewed or cleared at any time. This project demonstrates state management, local storage usage, and a clean user flow for booking and history tracking.`,
      tech: ['React', 'Local Storage', 'Booking Workflow'],
      link: 'https://bookmovies1.netlify.app'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
      {projects.map((proj, index) => (
  <motion.div
    key={index}
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <h3>{proj.title}</h3>
    <p>{proj.description}</p>
    <p className="tech"><strong>Tech Stack:</strong> {proj.tech.join(', ')}</p>
    <a href={proj.link} target="_blank" rel="noopener noreferrer">
      Visit Live Site
    </a>
  </motion.div>
))}

          
      </div>
      
    </section>
  );
}

export default Projects;
