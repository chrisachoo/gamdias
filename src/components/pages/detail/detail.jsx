import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaWindows } from 'react-icons/fa'
import { PrimaryButton } from '../../index'
import './detail.css'

const GameDetails = ({ data }) => {

  const location = useLocation()
  let check = location.pathname.substring(6) - 1
  let end = check + 1
  const currentData = data[check]
  // console.log('name: ', currentData.description)

  return (
    <div className='section__padding'>
      <div className='game__detail'>
        <div className='game__detail-image'>
          {data.slice(check, end).map(x => (
            <img key={x.id} src={x.avatar} />
          ))}
        </div>
        <div className='game__detail-information'>
          {data.slice(check, end).map(x => {
            return (
              <React.Fragment key={x.id}>
                <h2 className='name'>{x.name}</h2>
                <p className='description'>{x.description}</p>
                <p className='release'>Released {x.releaseDate}</p>
              </React.Fragment>
            )
          })}

          <div className='get-game'>
            <PrimaryButton label={`Get Game`}/>
          </div>
          <div className='inline__content'>
            <div className='inline__content-name'>
              <p>plartform: </p>
            </div>
            <div className='inline__content-icon'>
              <p><FaWindows /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDetails