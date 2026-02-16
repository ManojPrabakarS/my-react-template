import { Container, Row, Col, Button } from "react-bootstrap";
import hardwareicon from '../assets/Category/configuration.png'
import plumbingIcon from '../assets/Category/plumbing.png'
import paintIcon from '../assets/Category/painter.png'
import electricalIcon from '../assets/Category/plugin.png'
import interiorIcon from '../assets/Category/interior.png'
import HomeImg from '../assets/Home.jpg'
import Products from "../Components/Products";
import Brands from "../Components/Brands";




function Home() {

  const categories = [
    { name: "HARDWARES", icon: hardwareicon },
    { name: "PLUMBING", icon: plumbingIcon },
    { name: "PAINT", icon: paintIcon },
    { name: "ELECTRICALS", icon: electricalIcon },
    { name: "INTERIOR", icon: interiorIcon },
  ];



  return (
    <>

      {/* ================= HERO SECTION ================= */}
      <div className="bg-dark text-white p-5 rounded-5">
        <Container>
          <Row className="align-items-center">

            {/* Left Content */}
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">
                CONNECT WITH <span className="text-warning">MORE BUYERS</span>
              </h1>

              <p className="lead mt-3">
                Grow your business faster with verified vendors,
                trusted professionals and smart enquiries.
              </p>

              <div className="mt-4">
                <Button variant="warning" size="lg" className="me-3 fw-semibold px-4  mb-3 mb-lg-0">
                  Get Started
                </Button>

                <Button variant="outline-light" size="lg">
                  Learn More
                </Button>
              </div>
            </Col>

            {/* Right Image */}
            <Col md={6} className="text-center">
              <img
                src={HomeImg}
                alt="hero"
                className="img-fluid rounded shadow-lg"
              />
            </Col>

          </Row>
        </Container>
      </div>


      {/* ================= CATEGORY SECTION ================= */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-5">Our Category</h2>

        <Row className="justify-content-center">
          {categories.map((cat, index) => (
            <Col md={2} sm={4} xs={6} key={index} className="mb-4 text-center">
              <div className="category-box">
                <div className="category-icon">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="category-img"
                  />
                </div>
                <h6 className="mt-3 fw-semibold">{cat.name}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= PRODUCTS SECTION ================= */}
      <Products />
      {/* ================= PROFESSIONAL LIST ================= */}
      <Container className="my-5 text-center">
        <h2 className="fw-bold">Professional List</h2>
        <p>
          Our team includes electricians, plumbers, engineers,
          interior designers and more.
        </p>
      </Container>




      {/* ================= BRANDS SECTION ================= */}
      <Brands />

    </>
  );
}

export default Home;
