import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <>
    <h1 className="welcome">Welcome</h1>
    <Link to="/login">login</Link>
    <Link to="/signup">signup</Link>
    </>
  )
}