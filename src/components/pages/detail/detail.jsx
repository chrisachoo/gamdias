import React from 'react'
import { useLocation } from 'react-router-dom'
import './detail.css'

const GameDetails = ({ data }) => {

  const location = useLocation()
  let id = location.pathname.substring(6) - 1
  const currentData = data[id]
  // console.log('name: ', currentData.name)



  return (
    <div className='section__padding'>
      <div className='game__detail'>
        <div className='game__detail-image'>
          {data.slice(11, 12).map(x => (
            <img key={x.id} src={x.avatar} />
          ))}
        </div>
        <div className='game__detail-information'>
            <p>{currentData.object.name}</p>
        </div>
      </div>
    </div>
  )
}

export default GameDetails