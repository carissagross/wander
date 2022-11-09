import React from 'react'
import './HikeCard.css'

const HikeCard = ({id, name, image, location, distance}) => {
    return (
    <section className='card-container'>
        <div className='hike-card'>
            <p className='hike-name'>{name}</p>
            <img src={image} alt={name} className='hike-image'/>
            <p className='hike-distance'><b>Distance:</b> {distance} miles RT</p>
            <p className='hike-location'>{location}</p>
        </div>
    </section>
    )
}
export default HikeCard