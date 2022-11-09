import React from 'react'
import location_icon from '../../Images/location_icon.png'

import './HikeCard.css'

const HikeCard = ({id, name, image, location, distance}) => {
    return (
    <section className='card-container'>
        <div className='hike-card'>
            <p className='hike-name'>{name}</p>
            <img src={image} alt={name} className='hike-image'/>
            <p className='hike-distance'>{distance} miles round trip</p>
            <img src={location_icon} alt='location' className='location-icon'/><p className='hike-location'>{location}</p>
        </div>
    </section>
    )
}
export default HikeCard