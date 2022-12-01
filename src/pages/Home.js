import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <main>
        <h2>home标题</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <div>
          <Link to="/about">跳转到About</Link>
        </div>
        <div>
          <Link to="/Twojsx">跳转到Twojsx</Link>
        </div>
        <div>
          <Link to="/JqForm">跳转到Form</Link>
        </div>
        <div>
          <Link to="/ShareData">跳转到ShareData</Link>
        </div>
        <div>
          <Link to="/zuhe">跳转到zuhe</Link>
        </div>
        <div>
          <Link to="/uncontrolled-components">跳转到uncontrolled-components.</Link>
        </div>
        <div>
          <Link to="/forwarding-refs">跳转到forwarding-refs</Link>
        </div>
        <div>
          <Link to="/theme-context">跳转到theme-context</Link>
        </div>
        <div>
          <Link to="/theme-context-update">跳转到theme-context-update</Link>
        </div>
        <div>
          <Link to="/theme-context-multi">跳转到theme-context-multi</Link>
        </div>
        <div>
          <Link to="/theme-context-update">跳转到theme-context-update</Link>
        </div>
        <div>
          <Link to="/render-props">跳转到render-props</Link>
        </div>
        <div>
          <Link to="/portal">跳转到portal</Link>
        </div>
        <div>
          <Link to="/useReducer">跳转到useReducer</Link>
        </div>
      </nav>
    </>
  )
}

export default Home
