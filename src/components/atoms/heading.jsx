import React from 'react'
import styled from 'styled-components'

const HeadingText = styled.h2`
    font-size: 50px;
    font-weight: 700;
    color: #152632;
`

const Span = styled.span`
    color: #1ECEB9;
`

const Heading = ({ title, text }) => {
    return (
        <HeadingText>{title}
            <Span>{text}</Span>
        </HeadingText>
    )
}

export default Heading