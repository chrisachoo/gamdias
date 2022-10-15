import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Filter = styled.div`
  padding: 10px 20px;
  cursor: pointer;
`

// GAME DETAIL ELEMENTS
export const GameImage = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(251, 255, 241, .4) 1.95px 1.95px 2.6px;
`

export const GameDetail = styled.div`
  display: grid;
  margin-left: 4em;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin: unset;
  }
`

export const GameName = styled.h2`
  font-size: 30px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.Ivory};
`

export const GameDescription = styled.p`
  letter-spacing: 1px;
  text-align: justify;
  color: ${props => props.theme.colors.MaximumBluePurple};
  `

export const GameRelease = styled.p`
  margin: 8px 0;
  font-weight: 600;
  color: ${props => props.theme.colors.LavenderBlue};
`

export const ButtonWrapp = styled.div`
  margin: 0;
  padding: 8px 0;
`

export const GamePlartform = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const PlartformText = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${props => props.theme.colors.Ivory};
`
// export const GameTrailer = styled.iframe`
//   width: 100%;
//   height: 350px;

//   @media screen and (max-width: 991px) {
//     height: fit-content;
//     width: 100%;
//   }
// `

export const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`

export const GameTrailer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`