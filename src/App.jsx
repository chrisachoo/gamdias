import { Routes, Route, useLocation } from 'react-router-dom'
import GlobalStyles from './styled-elements/global.styles'
import {
  Navbar,
  CubeSpinner,
  Index,
  DetailInfo,
  Signin
} from './components'
import React, { useState, useEffect } from 'react'

function App() {

  const location = useLocation()
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${_url}games`)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The 
          status is ${response.status}`
          )
        }
        const res = await response.json()
        setData(res)
        console.log(res)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGames()

  }, [])

  return (
    <>
      <GlobalStyles />
      {isLoading && (<CubeSpinner />)}
      {!isLoading && (
        <div>
          {
            location.pathname !== '/signin' && <Navbar />
          }
          <Routes>
            <Route path='/' element={<Index data={data} />} />
            <Route path='/detail-info' element={<DetailInfo />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </div>
      )}
    </>
  )
}

export default App