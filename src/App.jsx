import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { Home, PageNotFound, Games, SignIn, SignUp, GameDetails } from './components/pages'
import { Navbar } from './components'

function App() {

  const [data, setData] = useState([])
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'
  let location = useLocation()

  useEffect(() => {
    axios.get(`${_url}games`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClickOutside = () => {
    console.log('onClickOutside() method called')
  }

  return (
    <div className="App">

      {
        location.pathname !== '/signin' && location.pathname !== '/signup' && <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/game' element={<Games data={data} />} />
        <Route path='/signin' element={<SignIn data={data} />} />
        <Route path='/signup' element={<SignUp data={data} />} />
        <Route path='game/:id' element={<GameDetails data={data} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default App