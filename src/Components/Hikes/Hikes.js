import React from 'react'
import PropTypes from 'prop-types'
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
    if (hikes === undefined) {
        return <p className='loading'>Hikes are Loading!</p>
    } else {
        return (
            <div className='main-container'>
                <div className='hikes-container'>
                    {hikeCards}
                </div>
            </div>
        )
    }
}
export default Hikes

Hikes.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    distance: PropTypes.string,
    key: PropTypes.string
}