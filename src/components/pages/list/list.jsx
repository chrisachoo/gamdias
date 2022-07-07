import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Search } from '../../index'

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

    return (
        <section className='section__padding'>
            <div className='game__search'>
                <Search />
            </div>
            <div className='games'>
                <div className='section__cards'>
                    {data.slice(9, 15).map(x => (
                        <Card className='section__cards-list' key={x.id} url={x.avatar} gameName={x.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Index