import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Heading, Card, Carousel, Paragraph } from '../../index'
import { HiChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Index = () => {

  const [data, setData] = useState([])
  const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

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

  // const renderData = () => {
  //   return data.map(data => {
  //     return (
  //       <span><img src={data.avatar} alt="jjj" style={{ width: '100%' }} /></span>
  //     )
  //   })
  // }

  return (
    <section className='section__padding'>
      <div className='section__content'>
        <div className='section__content-text'>
          <Heading title={`Time to `} text={`play`} />
          <Paragraph paragraph={`It’s time to discover new games, and we here to help you with the choice`} />
        </div>
        <div className='section__content-carousel'>
          <Carousel />
        </div>
      </div>
      <div className='section__title'>
        <p>popular games</p>
      </div>
      <div className='section__cards'>
        {data.slice(5, 8).map(x => (
          <Card className='section__cards-list' key={x.id} url={x.avatar} gameName={x.name} />
        ))}
      </div>
      <div className='section__games'>
        <Link to='./game'>
          <p>click here for more</p>
          <span><HiChevronDown /></span>
        </Link>
      </div>
    </section>
  )
}

export default Index