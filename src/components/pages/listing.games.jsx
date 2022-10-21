import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SectionContainer,
  ContainerCards,
  PaginateContainer
} from '../../styled-elements/index.elements'
import { animateScroll as scroll } from 'react-scroll'
import { Card, Paginate, Skelleton } from '../'

const Listings = ({ data }) => {

  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentGames = data.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    scroll.scrollToTop()
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      scroll.scrollToTop()
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      scroll.scrollToTop()
      setCurrentPage(currentPage + 1)
    }
  }

  const renderContainer = currentGames.map(
    (elements) => {
      return (
        <Card key={elements.id} src={elements.avatar}
          title={elements.name}
          alt={elements.name}
          onClick={() => navigate('/detail-info', { state: elements })}
        />
      )
    }
  )

  return (
    <SectionContainer id='games'>
      <ContainerCards>
        {renderContainer}
      </ContainerCards>
      <PaginateContainer>
        <Paginate page={postsPerPage}
          games={data.length}
          paginate={paginate}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </PaginateContainer>
    </SectionContainer>
  )
}

export default Listings