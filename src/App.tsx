import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pages from './Pages/__PageIndex'
import Nav from './Components/Nav'


function App() {
  console.log(Pages.Home.pageTitle)

  return (
    <main className='App'>
      <Nav />
      <Routes>
        {Object.values(Pages).map((item: any, index: any) => (
          <Route path={`/${item.key}`} element={item.pageElement} key={`${item}${index}`} />
        ))}
      </Routes>
    </main>
  )
}

export default App
