import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Twojsx from './pages/Twojsx'
import JqForm from './pages/Form'
import ShareData from './pages/shareData'
import Zuhe from './pages/zuhe'
import UncontrolledComponents from './pages/uncontrolled-components'
import ForwardingRefs from './pages/forwarding-refs'
import ThemeContext from './pages/theme-context'
import ThemeContextUpdate from './pages/theme-context-update'
import ThemeContextMulti from './pages/theme-context-multi'
import Portal from './pages/portal'
import RenderProps from './pages/render-props'
import UseReducer from './pages/useReducer'
import React, { Profiler } from 'react'

function App () {
  const callback = (id, phase, duration) => {console.log(id, phase, duration)}
  return (
    <div className="App">
      <React.StrictMode>
        <Profiler id="jade" onRender={callback}>
          <h1>全局标题！</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Twojsx" element={<Twojsx />} />
            <Route path="JqForm" element={<JqForm />} />
            <Route path="ShareData" element={<ShareData />} />
            <Route path="zuhe" element={<Zuhe />} />
            <Route path="uncontrolled-components" element={<UncontrolledComponents />} />
            <Route path="forwarding-refs" element={<ForwardingRefs />} />
            <Route path="theme-context" element={<ThemeContext />} />
            <Route path="theme-context-update" element={<ThemeContextUpdate />} />
            <Route path="theme-context-multi" element={<ThemeContextMulti />} />
            <Route path="portal" element={<Portal />} />
            <Route path="useReducer" element={<UseReducer />} />
            <Route path="render-props" element={<RenderProps data-custom={'路由传过来的数据'} />} />
          </Routes>
          <Link to="/">回到首页</Link>
        </Profiler>
      </React.StrictMode>
    </div>
  )
}

export default App
