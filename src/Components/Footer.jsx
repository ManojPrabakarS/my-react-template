import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-dark text-light pt-5 pb-4">
        <Container>
          <Row>

            {/* Column 1 - About */}
            <Col md={3} className="mb-4">

              <h1 className="text-warning">MP</h1>              <p style={{ fontSize: "14px" }}>
                At Vee Build Applications, we are committed to developing
                world-class applications that redefine digital experiences.
              </p>

              <h6 className="mt-4 text-warning">Follow Us</h6>
              <div className="d-flex gap-2 mt-2">
                <div className="social-icon"><FaTwitter /></div>
                <div className="social-icon"><FaFacebookF /></div>
                <div className="social-icon"><FaLinkedinIn /></div>
              </div>
            </Col>

            {/* Column 2 - Quick Links */}
            <Col md={3} className="mb-4">
              <h5 className="mb-3 text-warning">Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><FaChevronRight /> <Link to="/">Home</Link></li>
                <li><FaChevronRight /> <Link to="/faq">FAQ</Link></li>
                <li><FaChevronRight /> <Link to="/about">About Us</Link></li>
                <li><FaChevronRight /> <Link to="/terms">Terms And Conditions</Link></li>
                <li><FaChevronRight /> <Link to="/contact">Contact Us</Link></li>
              </ul>
            </Col>

            {/* Column 3 - Services */}
            <Col md={3} className="mb-4">
              <h5 className="mb-3 text-warning">Popular Services</h5>
              <ul className="list-unstyled footer-links">
                <li><FaChevronRight /> Elbow</li>
                <li><FaChevronRight /> Modular - Switches & Sockets</li>
                <li><FaChevronRight /> Doors</li>
                <li><FaChevronRight /> Others</li>
              </ul>
            </Col>

            {/* Column 4 - Contact */}
            <Col md={3} className="mb-4">
              <h5 className="mb-3 text-warning">Contact Us</h5>
              <p><FaPhoneAlt /> +91 7530055652</p>
              <p><FaEnvelope /> veebuild2024@gmail.com</p>
              <p>
                <FaMapMarkerAlt /> East 3rd Cross Street,
                Amaravati Nagar, Arumbakkam,
                Chennai, Tamil Nadu 600106
              </p>
            </Col>

          </Row>
        </Container>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center text-light py-3">
        © 2025 All Rights Reserved By{" "}
        <span className="text-warning">Manoj Prabakar</span>
      </div>

      {/* Scroll To Top */}
      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default Footer;
