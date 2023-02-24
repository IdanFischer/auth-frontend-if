import { useEffect, useState } from "react"

export default function Content() {
  const [secrets, setSecrets] = useState()
  useEffect(() => {
    fetch('http://localhost:5002/secrets')
      .then(res => res.json())
      .then(setSecrets)
      .catch(alert)
  }, [])

  return (
    <>
      <h1>Content</h1>
      {secrets
        ? <h2>{secrets.message}</h2>
        : <h2>Loading...</h2>
      }
    </>
  )
}