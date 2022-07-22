import React from 'react'
import { Card, Search } from '../../index'

const Index = ({data}) => {
    return (
        <section className='section__padding'>
            <div className='game__search'>
                <Search />
            </div>
            <div className='games'>
                <div className='section__cards'>
                    {data.slice(9, 18).map(x => (
                        <Card className='section__cards-list' key={x.id} url={x.avatar} gameName={x.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Index