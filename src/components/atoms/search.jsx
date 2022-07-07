import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'


const SearchBox = styled.div `
    border-radius: 6px;
    display: flex;
    align-items: center;
    background: #fff;
`

const Input = styled.input `
    border: none !important;
    font-weight: 400;
    padding: .5em 1em;
    color: #152632;
    border-radius: 6px 0 0 6px;
`

const Button = styled.button `
    border: none !important;
    font-size: 20px;
    padding: .5em 1em;
    border-radius: 0 6px 6px 0;
    color: #fff;
    background: #152632;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Search = () => {
  return (
    <SearchBox>
        <Input className='active' placeholder="Search..." />
        <Button><FaSearch/></Button>
    </SearchBox>
  )
}

export default Search