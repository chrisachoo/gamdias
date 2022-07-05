import React from 'react'
import styled from 'styled-components'

const CardComponent = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, .25) 0px 25px 50px -12px;
`
const Image = styled.img `
  width: 100%;
  height: 100%;
`
const Inside = styled.div`
  position: absolute;
  background:linear-gradient(0deg, rgba(27, 30, 35, 1) 0%, rgba(27, 30, 35, 0) 100%);
  width: 100%;
  height: 100%;
`
const Text = styled.p `
  color: #FFF;
  position: absolute;
  padding: 1em;
  bottom: 0;
`
const Card = ({ url, gameName }) => {
  return (
    <CardComponent>
      <Image src={url} alt="game-pic" />
      <Inside>
        <Text>{gameName}</Text>
      </Inside>
    </CardComponent>
  )
}

export default Card