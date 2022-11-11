import React from 'react'
import './FavoriteHikes.css'
import HikeCard from '../HikeCard/HikeCard'

const FavoriteHikes = ({ hikes }) => {
    const favHike = hikes.map(hike => {
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
        <div className='favorites-title-container'>
            <p className='title'>FAVORITE HIKES</p>
        <div className='error-container'>
                {!hikes.length && <p className='fav-error'>You have no favorites, yet! Add some!</p>}
        </div>
        <div className='favorites-container'>
                {favHike}
            </div>
        </div>
    )
}
export default FavoriteHikes