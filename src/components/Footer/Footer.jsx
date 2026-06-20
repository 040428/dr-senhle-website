import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div>
          <h3>Dr. Senhle</h3>
          <p>
            Christian Mentor, Educator,
            Counselor & Ministry Leader.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#training">Training</a>
          <a href="#teachings">Teachings</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>

          <p>76022924</p>
          <p>info@drsenhle.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Dr. Senhle Ministries.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
