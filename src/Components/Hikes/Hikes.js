import React from 'react'
import HikeCard from '../HikeCard/HikeCard'
import './Hikes.css'

const Hikes = ({hikes}) => {
    const hikeCards = hikes.map((hike) => {
        return (
            <HikeCard
            id={hike.id}
            name={hike.name}
            image={hike.image}
            location={hike.location}
            distance={hike.distance}
            key={hike.id}
            />
        )
    })
    return (
        <div className='hikes-container'>
            {hikeCards}
        </div>
    )
}
export default Hikes