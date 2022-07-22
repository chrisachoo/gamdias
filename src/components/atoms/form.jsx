import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`

const Label = styled.label`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
`
const Input = styled.input`
    width: 100%;
    padding: .5em 1em;
    border: 2px solid var(--primary-text);
    border-radius: 5px;
    outline: none;  
    margin-bottom: 1em;
`

const Form = ({label, type, placeholder, name, value, onChange }) => {
  return (
    <Container>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}></Input>
    </Container>
  )
}

export default Form