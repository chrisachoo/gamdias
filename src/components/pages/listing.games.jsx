import { useNavigate } from 'react-router-dom'
import {
  SectionContainer,
  ContainerContent,
  ContainerCards
} from '../../styled-elements/index.elements'
import { Card } from '../'

const Listings = ({ data }) => {

  const navigate = useNavigate()

  const renderContainer = data.map(
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
    <SectionContainer>
      <ContainerCards>
          {renderContainer}
      </ContainerCards>
    </SectionContainer>
  )
}

export default Listings