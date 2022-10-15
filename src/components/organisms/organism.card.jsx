import {
  Container,
  Overlay,
  CardFlap,
  OverlayText
} from '../../styled-elements/card.elements'

const Card = ({onClick, src, alt, title}) => {
  return (
    <Container onClick={onClick}>
      <CardFlap src={src} alt={alt}/>
      <Overlay>
        <OverlayText>{title}</OverlayText>
      </Overlay>
    </Container>
  )
}

export default Card