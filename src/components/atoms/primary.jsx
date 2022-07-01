import React from 'react'

const PrimaryButton = ({ onClick, label }) => {
  return (
    <button className='button' onClick={onClick}>{label}</button>
  )
}

export default PrimaryButton