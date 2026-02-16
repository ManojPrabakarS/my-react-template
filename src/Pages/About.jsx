import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TM1 from '../assets/TM/TM1.jpg'
import TM2 from '../assets/TM/TM2.jpg'
import TM3 from '../assets/TM/TM3.jpg'
import AboutPic from '../assets/About.jpg'


function About() {

  const Teams = [
    { name: 'Hasvi', designation: 'Project Manager', image: TM1 },
    { name: 'Praba', designation: 'Team Lead', image: TM3 },
    { name: 'Tobi', designation: 'HR', image: TM2 }
  ]
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold">About Vee Build</h1>
          <p className="lead mt-3">
            Building Trust. Delivering Quality. Creating Infrastructure Excellence.
          </p>
        </Container>
      </div>

      {/* ================= COMPANY INTRO ================= */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={AboutPic}
              alt="construction"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              Vee Build is a trusted construction marketplace connecting
              buyers, suppliers, and professionals across building materials,
              infrastructure, and interior solutions.
            </p>
            <p>
              We are committed to innovation, sustainability, and reliability,
              helping customers access high-quality materials and skilled
              professionals efficiently.
            </p>
            <Button variant="success" className="mt-3">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* ================= MISSION & VISION ================= */}
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Card className="shadow-sm p-4 h-100">
                <h3 className="fw-bold">Our Mission</h3>
                <p>
                  To simplify construction procurement by connecting
                  customers with verified vendors and professionals in one
                  reliable platform.
                </p>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow-sm p-4 h-100">
                <h3 className="fw-bold">Our Vision</h3>
                <p>
                  To become India's leading digital construction marketplace,
                  setting new standards in quality and customer satisfaction.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Us</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="p-4 shadow-sm h-100">
              <h5 className="fw-bold">Verified Vendors</h5>
              <p>We ensure trusted and quality suppliers.</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 shadow-sm h-100">
              <h5 className="fw-bold">Wide Product Range</h5>
              <p>All construction materials in one platform.</p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-4 shadow-sm h-100">
              <h5 className="fw-bold">Reliable Support</h5>
              <p>Dedicated support for smooth transactions.</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ================= STATS SECTION ================= */}
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <Row>
            <Col md={3} >
              <h2 className="fw-bold text-warning">500+</h2>
              <p>Vendors</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-warning">10K+</h2>
              <p>Products</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-warning">2000+</h2>
              <p>Professionals</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-warning">100%</h2>
              <p>Customer Satisfaction</p>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ================= TEAM SECTION ================= */}
      <div className="team-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5 position-relative team-title">
            Our Team
          </h2>

          <Row className="g-4">
            {Teams.map((item, index) => (
              <Col md={4} key={index}>
                <Card className="team-card text-center h-100 border-0 shadow-sm">

                  {/* Fixed Image Wrapper */}
                  <div className="team-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="team-img"
                    />
                  </div>

                  <Card.Body>
                    <h5 className="fw-bold mb-1">{item.name ? item.name : 'Team Member'}</h5>
                    <p className="text-muted">{item.designation ? item.designation : 'Designation'}</p>
                  </Card.Body>

                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>


      {/* ================= CALL TO ACTION ================= */}
      <div className="bg-dark text-white text-center py-5 mb-5 rounded-5">
        <Container>
          <h2 className="fw-bold">Ready to Build With Us?</h2>
          <p className="mt-3">
            Join Vee Build today and experience seamless construction solutions.
          </p>
          <Button variant="warning" size="lg">
            Get Started
          </Button>
        </Container>
      </div>
    </>
  );
}

export default About;
