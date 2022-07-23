import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Card, Search } from '../../index'

const Index = ({ data }) => {

  const [pages, setPageNumber] = useState(0)
  const perPage = 9
  const pageVisited = pages * perPage

  const handleClick = (event, key) => {
    console.log('key index: ', key)
    console.log(data[key])
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
          onClick={event => handleClick(event, key)}
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