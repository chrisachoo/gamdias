import React from 'react'
import './detail.css'

const GameDetails = ({ data }) => {
  return (
    <div className='section__padding'>
      <div className='game__detail'>
        <div className='game__detail-image'>
          {data.slice(11, 12).map(x => (
            <img key={x.id} src={x.avatar} />
          ))}
        </div>
        <div className='game__detail-information'>
          {data.slice(11, 12).map(x => (
            <>
              <h2>game title: {x.name}</h2>
              <p>game genre: {x.genre}</p>
              <p>release: {x.releaseDate}date</p>
              <p>rating: {x.rating}</p>
              <p>bublisher: {x.publishe}</p>
              <p>developer: {x.developer}</p>
              <p>description: {x.description}</p>
            </>

          ))}
        </div>
      </div>
    </div>
  )
}

export default GameDetails