import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <main>
        <h2>about标题</h2>
        <p>that feels like an axist!</p>
      </main>
      <nav>
        <Link to="/">跳转到Home</Link>
      </nav>
    </>
  )
}

export default About
