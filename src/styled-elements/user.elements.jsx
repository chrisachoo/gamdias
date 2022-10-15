import styled from 'styled-components'

export const ContainerFluid = styled.div`
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  height: 100%;
  max-width: 1300px;
`

export const AnimationContainer = styled.div`
  background: #3C37FF;

  @media screen and (max-width: 960px){
    display: none;
  }
`
export const FormContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  
  @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const Form = styled.form `
  margin-top: 5em;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`