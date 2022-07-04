import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../index'

const Index = () => {

    const [data, setData] = useState([])
    const _url = 'https://62c2c416876c4700f52db5b6.mockapi.io/api/v1/'

    useEffect(() => {
        axios.get(`${_url}games`)
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const renderData = () => {
        return data.map(data => {
            return (
                <span><img src={data.avatar} alt="jjj" style={{ width: '100%' }} /></span>
            )
        })
    }

    return (
        <div>
            <ul>
                {data.map(x => (
                    <Card key={x.id} url={x.avatar} gameName={x.name} />
                ))}
            </ul>
        </div>
    )
}

export default Index