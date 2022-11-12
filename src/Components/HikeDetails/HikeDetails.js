import { render } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'
import './HikeDetails.css'

const HikeDetails = ({ hike, saveHike }) => {
    return (
        <section className='details-container'>
            <div className='image-name-description-wrapper'>
                <p className='details-name'>{hike.name}</p>
                <img src={hike.image} alt="Sweeping mountain views" className='details-image'/>
                <p className='details-description'>{hike.description}</p>
            </div>
            <div className='other-details-wrapper'>
                <p className='details-difficulty'><b>Difficulty:</b> {hike.difficulty}</p>
                <p className='details-distance'><b>Distance: </b>{hike.distance} miles round-trip</p>
                <p className='details-elevation'><b>Elevation Gain: </b>{hike.elevation} feet</p>
                <button className='favorite-button' onClick={() => saveHike(hike.id)}>ADD TO FAVORITES</button>
            </div>
        </section>
    )
}
export default HikeDetails

HikeDetails.propTypes = {
    hikeDetails: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        difficulty: PropTypes.string,
        distance: PropTypes.string,
        elevation: PropTypes.string,
        image: PropTypes.string
    }),
    saveFavoriteHike: PropTypes.func,
}