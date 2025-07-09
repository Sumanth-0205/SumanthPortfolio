// src/pages/Contact.jsx
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
   formData.append('access_key', import.meta.env.VITE_WEB3_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Thanks for reaching out, We will respond to you shortly', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      e.target.reset();
    } else {
      toast.error('Failed to send email. Try again later.');
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or the form below!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Description (optional)" />
        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default Contact;
