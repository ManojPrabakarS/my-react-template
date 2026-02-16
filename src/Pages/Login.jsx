import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
  InputGroup
} from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUserLock } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful ✅");
    }, 2000);
  };

  return (
    <div className="d-flex align-items-center mb-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card bg="dark" text="light" className="shadow-lg border-0">
              <Card.Body className="p-4">

                {/* Header */}
                <div className="text-center mb-4">
                  <FaUserLock size={40} className="text-warning mb-2" />
                  <h3 className="text-warning">Login</h3>
                  <small className="text-secondary">
                    Welcome back! Please login to continue.
                  </small>
                </div>

                <Form onSubmit={handleSubmit}>
                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        required
                      />
                      <Button
                        variant="outline-warning"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* Login Button */}
                  <Button
                    variant="warning"
                    type="submit"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          size="sm"
                          animation="border"
                          className="me-2"
                        />
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Form>

                {/* Footer */}
                <div className="text-center mt-3">
                  <small>
                    Don’t have an account?{" "}
                    <span className="text-warning">Register</span>
                  </small>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
