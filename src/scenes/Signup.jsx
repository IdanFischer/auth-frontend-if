import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
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
        <Row>
          <Col><Button className="p-2 mt-3 bg-white text-light">
            <Link to="/login">Already a member? Login here!</Link>
          </Button></Col>
        </Row>
      </Container>
    </>
  )
}