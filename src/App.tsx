import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Channels/Home'
import About from './Channels/About'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
