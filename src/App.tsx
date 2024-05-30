import { useState, useEffect } from 'react'

import './AppStyle/0-app.scss'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import RootPages from './Pages/Root/RootPages';
import InstPages from './Pages/Inst/InstPages';
import Authors from './Pages/Authors/Authors';
import Books from './Pages/Books/Books';
import BookPages from './Pages/Books/BookPages';

function App() {
  useState(() => {
    // console.log()
    const greetings = "Hello, World"
    console.log(greetings)
    
  });

  useEffect(() => {
    // console.log()
  }, []);

  // const [count, setCount] = useState(0) // 说实话我不知道这是什么，先留着再说了
  
  console.log(`bookpages: ${BookPages.EP_000_T.info.key}`)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* set home page of nbl */}
            <Route index element={RootPages.RootPage_Home.content} />

            {/* import root pages of nbl */}
            {Object.values(RootPages).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}

            {/* import institutes */}
            {Object.values(InstPages).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}

            {/* import books */}
            {Object.values(Books).map((book: any, i: any) => (
              <Route
                path={`/${book.info.key}`}
                element={book.content}
                key = {`${book}${i}`}
              >
              </Route>
            ))}

            {/* import book pages */}
            {Object.values(BookPages).map((book: any, i: any) => (
              <Route
                path={`/${book.info.key}`}
                element={book.content}
                key = {`${book}${i}`}
              >
              </Route>
            ))}

            {/* import book authors */}
            {Object.values(Authors).map((item: any, i: any) => (
              <Route
                path={`/${item.info.key}`}
                element={item.content}
                key = {`${item}${i}`}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>

      {/* 说实话我不知道这是什么，先留着再说了 */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
