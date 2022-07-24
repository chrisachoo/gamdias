import React from 'react'
import { Heading, Card, Carousel, Paragraph } from '../../index'
import { HiChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Index = ({ data}) => {

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
        <Link to='./game' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <p>click here for more</p>
          <span><HiChevronDown /></span>
        </Link>
      </div>
    </section>
  )
}

export default Index