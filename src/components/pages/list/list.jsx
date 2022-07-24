import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { Card, Search } from '../../index'

const Index = ({ data }) => {

  const [pages, setPageNumber] = useState(0)
  let navigate = useNavigate()
  const perPage = 9
  const pageVisited = pages * perPage

  const handleClick = (num) => {
    console.log('key index: ', num)
    console.log(data[num - 1])
    navigate('/game/' + num)
  }

  const listGames = data
    .slice(pageVisited, pageVisited + perPage)
    .map((data) => {
      return (
        <Card
          className='section__cards-list'
          key={data.id}
          url={data.avatar}
          gameName={data.name}
          onClick={() => handleClick(data.id)}
        />
      )
    })

  const pageCount = Math.ceil(data.length / perPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <section className='section__padding'>
      <div className='game__search'>
        <Search />
      </div>
      <div className='games'>
        <div className='section__cards'>
          {listGames}
        </div>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination__buttons'}
          previousLinkClassName={'previous__button'}
          nextLinkClassName={'next__button'}
          disabledClassName={'pagination__disabled'}
          activeClassName={'pagination__active'}
        />
    </section>
  )
}

export default Index