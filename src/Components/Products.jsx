import lights from '../assets/Products/led.jpg'
import bathfit from '../assets/Products/nf.jpg'
import mar from '../assets/Products/mar.jpg'
import py from '../assets/Products/py.jpg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'


const Products = () => {


    const products = [
        { name: "LED Lights", image: lights },
        { name: "Bath fittings", image: bathfit },
        { name: "Marble", image: mar },
        { name: "Plywood", image: py },
    ];
    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="text-center fw-bold mb-4">Our Products</h2>
                <Row className="justify-content-center">
                    {products.map((item, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="text-center product-card shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                />
                                <Card.Body>
                                    <Card.Text className="fw-semibold">{item.name}</Card.Text>
                                    <Button variant="warning" size="sm" className="product-btn rounded-2 fw-medium p-2">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Products
