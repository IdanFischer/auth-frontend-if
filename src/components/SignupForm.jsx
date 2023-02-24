import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../App"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function SignupForm() {
  // sets the email of the person signing in
  const [email, setEmail] = useState('')
  // sets the password of the person signing in
  const [password, setPassword] = useState('')
  // brings in setUser from App.js so that setUser can in inherit the email
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // make a post request to the API with the form data
    // 'https://auth-api-if.web.app/signup'
    // http://localhost:5002/signup
    fetch('http://localhost:5002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      // create a new user in the database
      // 1. do something with the new user
      // then...
      .then(res => res.json())
      .then(res => {
        setUser(res)
        localStorage.setItem("token", res.token)
        // 2. redirect to the content page
      })
      .then(navigate('/secret'))
      .catch(err => alert(err.message))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <p className="text-light">Please sign up to contiune to the Beer festival </p>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            className="p-2 hover-effect"
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            className="p-2 hover-effect"
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button
          variant="outline-light"
          type="sumbit"
          className="mt-3"
          size="lg"
        >Submit
        </Button>
      </form>
    </>
  )
}