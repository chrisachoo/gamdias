import React from 'react'
import './App.css'
import { Heading, Input } from './components'
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Heading title={`Time to`} text={` play`} />
     <Input label={<FaUser />} type={`text`} placeholder={`name`} name='firstname' />
    </div>
  )
}

export default App
