import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, UndefinedPage, Games } from './components/pages'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Games />} />
        <Route path='*' element={<UndefinedPage />} />
      </Routes>
    </div>
  )
}

export default App
