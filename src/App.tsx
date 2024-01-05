import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Home from './Channels/Home'
import About from './Channels/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
