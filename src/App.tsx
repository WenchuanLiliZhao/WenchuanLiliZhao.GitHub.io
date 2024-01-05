import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path={`/${Portfolio.key}`} element={Portfolio.pageElement} />
      </Routes>
    </main>
  )
}

export default App
