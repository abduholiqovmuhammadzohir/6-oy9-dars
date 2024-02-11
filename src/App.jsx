import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Context from './components/Context'
import Memo from './components/Memo'

export const UseContext = React.createContext(null);

function App() {

  const user = {
    name: "John",
    age: 33
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link className='link' to="/">Card</Link>
            </li>
            <li>
              <Link className='link' to="/memo">Memo</Link>
            </li>
            <li>
              <Link className='link' to="/context">Context</Link>
            </li>
          </ul>
        </nav>

        <div className='text'>
          <Routes>
            <Route path='/' element={<Card></Card>}></Route>
            <Route path='memo' element={<Memo></Memo>}></Route>
              <Route path='context' element={<Context></Context>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App