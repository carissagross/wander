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
        <div className='favorites-container'>
                {!hikes.length && <h2 className='fav-error'>You have no favorites, yet! Add some!</h2>}
                {favHike}
            </div>
        </div>
    )
}
export default FavoriteHikes