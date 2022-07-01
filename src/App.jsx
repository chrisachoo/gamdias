import React from 'react'
import './App.css'
import { Heading, Input, Card } from './components'
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Heading title={`Time to `} text={`play`} />
      <Input label={<FaUser />} placeholder={`First Name`} type={`text`} name={`first_name`} />
      <Card url={`https://wallpaperaccess.com/full/2286525.jpg`} gameName={`Call of Duty`} />
      <Card url={`https://wallpaperaccess.com/full/6098048.jpg`} gameName={`Battlefield 2042`} />
      <Card url={`https://wallpaperaccess.com/full/331887.jpg`} gameName={`Uncharted 4: A Thief's End`} />

    </div>
  )
}

export default App
