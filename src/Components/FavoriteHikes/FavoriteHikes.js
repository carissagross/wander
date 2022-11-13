import React from 'react'
import './FavoriteHikes.css'
import HikeCard from '../HikeCard/HikeCard'
import PropTypes from 'prop-types'


const FavoriteHikes = ({ favHikes }) => {
    const favHike = favHikes.map(hike => {
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
        }
    )
    return (
        <div className='favorites-title-container'>
            <p className='title'>FAVORITE HIKES</p>
            <div className='error-container'>
                {!favHike.length && <p className='fav-error'>You have no favorites, yet! Add some!</p>}
            </div>
            <div className='favorites-container'>
                {favHike}
            </div>
        </div>
    )
}
export default FavoriteHikes

const favoritesShape = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    distance: PropTypes.string,
    key: PropTypes.string
}

FavoriteHikes.propTypes = {
    favHikes: PropTypes.arrayOf(PropTypes.shape(favoritesShape)).isRequired
}