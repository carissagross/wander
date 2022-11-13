import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import location_icon from '../../Images/location_icon.png'
import './HikeCard.css'

const HikeCard = ({id, name, image, location, distance}) => {
    return (
        <Link to={`/${id}`} key={id} className='hike-card'>
        <div className='hike-name-container'>
            <p className='hike-name'>{name}</p>
        </div>
            <img src={image} alt={name} className='hike-image'/>
            <p className='hike-distance'>{distance} miles round trip</p>
        <div className='hike-location'>
            <img src={location_icon} alt='location' className='location-icon'/>
            <p>{location}</p>
        </div>
        </Link>
    )
}
export default HikeCard

HikeCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    distance: PropTypes.string,
}