const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-glow-orb" />
        <h1 className="contact-title">Let's Connect</h1>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
