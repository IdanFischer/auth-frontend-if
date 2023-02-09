import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"

export default function Login() {
  return (
    <>
      <Container className="p-5 custom-login-form">
        <Row>
          <Col><Header title="Login" /></Col>
        </Row>

        <Row>
          <Col><LoginForm /></Col>
        </Row>
        <Row>
          <Col><Button className="p-2 mt-3"><Link to="/signup" className="text-light">Sign Up to become a member</Link></Button></Col>
        </Row>
      </Container>
    </>
  )
}