import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "../components/Header"
import SignupForm from "../components/SignupForm"

export default function Signup() {
  return (
    <>
      <Container className="p-5 custom-signup-form">
        <Row>
          <Col><Header title="Sign up" /></Col>
        </Row>

        <Row>
          <Col><SignupForm /></Col>
        </Row>
      </Container>
    </>
  )
}