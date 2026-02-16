import { Container, Row, Col, Card, Button } from "react-bootstrap";


function Service() {
  const services = [
    {
      title: "Construction Materials Supply",
      desc: "High-quality cement, steel, tiles, electricals and more.",
    },
    {
      title: "Professional Hiring",
      desc: "Connect with verified plumbers, electricians, engineers and designers.",
    },
    {
      title: "Real Estate Services",
      desc: "Buy, sell or rent properties with trusted partners.",
    },
    {
      title: "Interior & Exterior Solutions",
      desc: "Modern interior designs and finishing solutions.",
    },
    {
      title: "Waterproofing & Maintenance",
      desc: "Reliable waterproofing and building maintenance services.",
    },
    {
      title: "Bulk Vendor Enquiry",
      desc: "Send enquiries directly to multiple suppliers instantly.",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold">Our Services</h1>
          <p className="lead mt-3">
            End-to-End Construction Solutions in One Platform
          </p>
        </Container>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">What We Offer</h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="service-card h-100 border-0 shadow p-4 bg-dark">
                <Card.Body>
                  <h5 className="fw-bold mb-3 text-light">{service.title}</h5>
                  <p className="text-light">{service.desc}</p>
                  <Button variant="warning" size="sm">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= HOW IT WORKS ================= */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">How It Works</h2>

          <Row className="text-center">
            <Col md={4}>
              <h4 className="fw-bold">Search</h4>
              <p>Find materials or professionals easily.</p>
            </Col>
            <Col md={4}>
              <h4 className="fw-bold">Connect</h4>
              <p>Contact verified vendors directly.</p>
            </Col>
            <Col md={4}>
              <h4 className="fw-bold">Build</h4>
              <p>Complete your project with confidence.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5">Why Choose Vee Build</h2>

        <Row className="g-4 text-center">
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3">
              <h4 className="fw-bold text-warning">500+</h4>
              <p>Trusted Vendors</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3">
              <h4 className="fw-bold text-warning">10K+</h4>
              <p>Products Listed</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3">
              <h4 className="fw-bold text-warning">2000+</h4>
              <p>Professionals</p>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm p-3">
              <h4 className="fw-bold text-warning">24/7</h4>
              <p>Customer Support</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      <div className="bg-dark text-white text-center py-5 mb-4  ">
        <Container>
          <h2 className="fw-bold">Need Help With Your Project?</h2>
          <p className="mt-3">
            Get in touch with us and start building smarter today.
          </p>
          <Button variant="warning" size="lg">
            Contact Us
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Service;
