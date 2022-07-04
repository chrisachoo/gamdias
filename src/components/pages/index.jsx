import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Index = () => {

    const [data, setData] = useState([])
    const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

    useEffect(() => {
        axios.get(`${_url}games`)
        .then(res => setData(res.data))
    },[])

    const renderData = () => {
        return data.map(data => {
            return (
                <span><img src={data.avatar} alt="jjj" style={{width: '100%'}}/></span>
            )
        })
    }

  return (
    <div>{renderData()}</div>
  )
}

export default Index