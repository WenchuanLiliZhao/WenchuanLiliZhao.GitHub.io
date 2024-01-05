import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Channels/Home'
import About from './Channels/About'

function App() {

  return (
      <main className="app">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
  )
}

export default App
