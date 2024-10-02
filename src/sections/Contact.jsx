import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Rayhan Naufal',
          from_email: form.email,
          to_email: 'rayhanarrafi1107@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  const sectionRef = useRef(null); // Reference to the section element
  const [isInView, setIsInView] = useState(false); // State to track if section is in view

  // Scroll Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set isInView to true only if it was false before
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Update state when in view
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of the component is in view
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  const textVariants = (delay = 0) => ({
    initial: {
      scale: 0.3,
      opacity: 0.3,
    },
    animate: {
      scale: [0.3, 0.5, 1],
      opacity: 1,
      transition: {
        duration: 2, // Atur durasi keseluruhan agar smooth
        delay: delay, // Menyesuaikan delay
        ease: 'easeInOut', // Membuat animasi lebih halus
      },
    },
  });

  const xsMobile = useMediaQuery({ maxWidth: 320 });
  const smMobile = useMediaQuery({ maxWidth: 440 });

  return (
    <section ref={sectionRef} className="c-space my-20 max-w-7xl mx-auto" id="contact">
      {alert.show && <Alert {...alert} />}

      <motion.div
        variants={textVariants(0.3)} // Menambahkan sedikit delay
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className={` w-auto  absolute inset-0  min-h-screen object-fit  ${smMobile && 'h-[110vh]'} ${xsMobile && 'h-[160vh]'}`}
        />

        <div className="contact-container text-white-600">
          <h3 className="head-text ">Let's talk</h3>
          <p className="text-lg mt-3">
            If you need a full stack developer to create or improve your website I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={smMobile ? 3 : 5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
