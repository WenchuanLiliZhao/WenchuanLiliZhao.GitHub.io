import { Route, Routes } from 'react-router-dom'
import './App.css'
import Pages from './Pages/__PageIndex'


function App() {
  console.log(Pages.Home.pageTitle)

  return (
    <main className='App'>
      <Routes>
        {Object.values(Pages).map((item: any, index: any) => (
          <Route path={`/${item.key}`} element={item.pageElement} key={`${item}${index}`} />
        ))}
      </Routes>
    </main>
  )
}

export default App
