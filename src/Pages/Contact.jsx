import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page py-5">
      <Container>
        <Row className="g-4">

          {/* Left Side - Contact Info */}
          <Col lg={4}>
            <Card className="bg-dark text-light border-0 h-100 shadow">
              <Card.Body>
                <h4 className="mb-4 text-warning">Contact Information</h4>

                <p>
                  <FaPhoneAlt className="me-2 text-warning" />
                  +91 9876543210
                </p>

                <p>
                  <FaEnvelope className="me-2 text-warning" />
                  info@example.com
                </p>

                <p>
                  <FaMapMarkerAlt className="me-2 text-warning" />
                  Chennai, Tamil Nadu, India
                </p>

                <hr className="border-secondary" />

                <p style={{ fontSize: "14px" }}>
                  Feel free to reach out for any inquiries or project discussions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Side - Contact Form */}
          <Col lg={8}>
            <Card className="bg-dark text-light border-0 shadow">
              <Card.Body>
                <h3 className="mb-4 text-warning">Send Us a Message</h3>

                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        className="dark-input"
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        className="dark-input"
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter subject"
                      className="dark-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                      className="dark-input"
                    />
                  </Form.Group>

                  <Button variant="warning" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Contact;
